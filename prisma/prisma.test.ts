import { test, expect, describe } from 'vitest';
import prisma from './prisma';
import { PrismaClient } from '@prisma/client';

describe('Banco de dados', () => {
  test('Instancia do Prisma Client', () => {
    expect(prisma).instanceOf(PrismaClient);
  });
})