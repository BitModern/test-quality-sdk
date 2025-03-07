export function chunkArray<T>(array: T[], chunkCount: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkCount) {
    chunks.push(array.slice(i, i + chunkCount));
  }
  return chunks;
}
