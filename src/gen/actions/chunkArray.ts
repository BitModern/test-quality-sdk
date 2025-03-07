export function chunkArray<T>(array: T[], chunkCount: number): T[][] {
  const chunkSize = Math.ceil(array.length / chunkCount);
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
