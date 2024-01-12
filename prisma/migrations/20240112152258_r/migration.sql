-- CreateTable
CREATE TABLE "WorkImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT NOT NULL,

    CONSTRAINT "WorkImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AnswerBlock" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AnswerBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkImage_id_key" ON "WorkImage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Work_url_key" ON "Work"("url");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerBlock_id_key" ON "AnswerBlock"("id");

-- AddForeignKey
ALTER TABLE "WorkImage" ADD CONSTRAINT "WorkImage_url_fkey" FOREIGN KEY ("url") REFERENCES "Work"("url") ON DELETE RESTRICT ON UPDATE CASCADE;
