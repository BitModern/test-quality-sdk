# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
yarn build           # Clean and compile TypeScript to dist/
yarn dev             # Watch mode compilation
yarn test            # Run Jest tests
yarn lint            # ESLint check
yarn format:fix      # Prettier formatting
yarn release         # Version bump, tag, and npm publish
```

### Running Tests
Tests require authentication credentials. Copy `.env.example` to `.env` and add your email/password before running `yarn test`.

## Architecture Overview

This is a TypeScript SDK for the TestQuality API. The SDK provides CRUD operations for 110+ domain entities through auto-generated service functions.

### Key Directory Structure

- **`src/ClientSdk.ts`** - Main entry point; singleton managing API client, auth, and configuration
- **`src/auth/`** - Authentication layer with OAuth 2.0, token refresh, and request interceptors
- **`src/gen/`** - **Auto-generated code (DO NOT EDIT)** containing all domain entities
- **`src/services/`** - Business logic services (batch HTTP, TestRail integration, requirements)
- **`src/exceptions/`** - Error classes (HttpError, ApiException, GeneralError)

### Generated Code Pattern (`src/gen/`)

Each domain entity in `src/gen/domain/` follows a consistent pattern:
- `Entity.ts` - Base interface extending `KeyedModel`
- `EntityApi.ts` - Full interface with relations to other entities
- `entityService.ts` - CRUD functions (getMany, getOne, createOne, updateOne, deleteOne)

The `src/gen/routes/Routes.ts` file contains functions that build API endpoint URLs.

### Authentication Flow

The SDK supports two authentication methods:
1. **Personal Access Token**: `client.getAuth().setToken({access_token: 'token'})`
2. **Login**: `client.getAuth().login('email', 'password', true)`

Request interceptors automatically add Bearer tokens and handle 401 responses with token refresh.

### Model Hierarchy

```
TenantScopedModel (has client_id)
  → KeyedModel (adds key)
    → [Entity] (e.g., Project)
      → [Entity]Api (adds relations)
```

### Global Client Access

After initialization, use `getGlobalClient()` to access the singleton ClientSdk instance. Initialize with `setGlobalClient(client)`.

## TypeScript Configuration

- Path alias: `@sdk/*` maps to `./src/*`
- Target: ES6 with CommonJS modules
- Strict mode enabled
- Uses `typescript-transform-paths` plugin for path transformation
