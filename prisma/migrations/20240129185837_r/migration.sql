-- CreateTable
CREATE TABLE "SiteThumbnail" (
    "id" SERIAL NOT NULL,
    "media" TEXT NOT NULL,

    CONSTRAINT "SiteThumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteThumbnail_id_key" ON "SiteThumbnail"("id");
