-- AlterTable
ALTER TABLE "public"."chatSessions" ADD COLUMN "ownerUserId" TEXT;
ALTER TABLE "public"."chatSessions" ADD COLUMN "sharedFromUserId" TEXT;
ALTER TABLE "public"."chatSessions" ADD COLUMN "sharedFromEmail" TEXT;
ALTER TABLE "public"."chatSessions" ADD COLUMN "sharedFromName" TEXT;
ALTER TABLE "public"."chatSessions" ADD COLUMN "sharedNote" TEXT;

-- CreateIndex
CREATE INDEX "chatSessions_ownerUserId_idx" ON "public"."chatSessions"("ownerUserId");

-- CreateTable
CREATE TABLE "public"."chatShares" (
    "id" TEXT NOT NULL,
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,
    "sourceSessionId" TEXT NOT NULL,
    "targetSessionId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "readAt" TIMESTAMP(3),
    CONSTRAINT "chatShares_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chatShares_toUserId_createdAt_idx" ON "public"."chatShares"("toUserId", "createdAt" DESC);
CREATE INDEX "chatShares_fromUserId_idx" ON "public"."chatShares"("fromUserId");
CREATE INDEX "chatShares_targetSessionId_idx" ON "public"."chatShares"("targetSessionId");
