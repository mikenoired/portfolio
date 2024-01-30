-- CreateTable
CREATE TABLE "SocLink" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "personCardId" INTEGER,

    CONSTRAINT "SocLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonCard" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "place" TEXT NOT NULL,

    CONSTRAINT "PersonCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutPage" (
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SocLink_id_key" ON "SocLink"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PersonCard_id_key" ON "PersonCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AboutPage_content_key" ON "AboutPage"("content");

-- AddForeignKey
ALTER TABLE "SocLink" ADD CONSTRAINT "SocLink_personCardId_fkey" FOREIGN KEY ("personCardId") REFERENCES "PersonCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
