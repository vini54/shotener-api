-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "origUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");
