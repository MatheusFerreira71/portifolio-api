export function notInList<T = unknown>(arr1: T[], arr2: T[]): T[] {
  return arr2.filter(item => !arr1.includes(item));
}

export function removeDuplicados<T extends number | string>(lista: T[]) {
  return [...new Set(lista)];
}