import { describe, expect, test } from "vitest";
import { notInList, removeDuplicados } from "./utils";

describe('Testando funções Utils', () => {
  describe('Testando notInList', () => {
    test('Deve retornar itens que não pertencem a lista 1', () => {
      const lista1 = [1, 2, 3, 4];
      const lista2 = [1, 2, 3, 5, 6];
      const resultado = notInList<number>(lista1, lista2);

      expect(resultado).toEqual([5, 6]);
    });

    test('Deve retornar vazio', () => {
      const lista1 = [1, 2, 3, 4];
      const lista2 = [1, 2, 3, 4];
      const resultado = notInList<number>(lista1, lista2);

      expect(resultado).toEqual([]);
    });
  });

  describe('Testando removeDuplicados', () => {
    test('Deve retornar números distintos', () => {
      const lista = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8];

      const resultado = removeDuplicados<number>(lista);

      expect(resultado).toEqual<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('Deve retornar palavras distintas', () => {
      const lista = ['a', 'b', 'c', 'c', 'd'];

      const resultado = removeDuplicados<string>(lista);

      expect(resultado).toEqual<string[]>(['a', 'b', 'c', 'd']);
    });
  });
});