/**
 * Backend-owned permission groups for the Roles UI (testQuality ENG-17/18).
 *
 * The backend projects a role's per-table policies onto these coarse groups
 * and writes a group's toggles back onto every table in it. The group list
 * comes from `config/permission_groups.php` on the server — never hard-code
 * it here; render whatever `getPermissionGroups()` returns.
 */

export type PermissionGroupSection = 'administration' | 'project';

/** A group definition, from GET /permission_group. */
export interface PermissionGroupDefinition {
  key: string;
  label: string;
  section: PermissionGroupSection;
  /** Policy tables the group's toggles write. Informational for the UI. */
  tables: string[];
}

/** One group of a role's projection, from GET /access_role/{id}/permissions. */
export interface PermissionGroupState {
  key: string;
  label: string;
  section: PermissionGroupSection;
  /** Every table in the group is viewable. */
  view: boolean;
  /** Every table in the group has create, edit and delete. */
  edit: boolean;
  /**
   * The group's tables disagree, or a table holds only some of the flags.
   * System roles are defined per table and can legitimately be mixed; a role
   * saved through setRolePermissions never is. Saving a mixed group
   * normalises it to the toggle's value — warn before doing so.
   */
  mixed: boolean;
}

export interface RolePermissions {
  access_role_id: number;
  groups: PermissionGroupState[];
  /** Empty means the role is not restricted to particular projects. */
  project_ids: number[];
}

/** A toggle to write. `edit: true` implies `view: true`. Omitted groups are left alone. */
export interface PermissionGroupToggle {
  key: string;
  view?: boolean;
  edit?: boolean;
}

export interface SetRolePermissionsParam {
  groups: PermissionGroupToggle[];
  /**
   * Omit to leave the project restriction alone; `[]` removes it; a list
   * restricts the role to exactly those projects. Unknown ids are refused
   * with 422.
   */
  project_id?: number[];
}
