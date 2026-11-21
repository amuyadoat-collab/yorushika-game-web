import { PrismaClient } from "../generated/prisma/client";

// 1. Node.jsの「消えない領域（globalThis）」に prisma を保存する場所を用意
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 2. すでに保存されていればそれを使い、なければ新しく1つだけ作る
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// 3. 開発環境なら、作ったインスタンスを「消えない領域」に保存しておく
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
