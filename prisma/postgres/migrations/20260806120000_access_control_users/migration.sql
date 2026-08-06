-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
    "mustChangePassword" BOOLEAN NOT NULL DEFAULT true,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "permDashboard" BOOLEAN NOT NULL DEFAULT true,
    "permChat" BOOLEAN NOT NULL DEFAULT true,
    "permApi" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "public"."users"("email");

-- AlterTable
ALTER TABLE "public"."apiKeys" ADD COLUMN "userId" TEXT;

-- CreateIndex
CREATE INDEX "apiKeys_userId_idx" ON "public"."apiKeys"("userId");
