-- CreateTable
CREATE TABLE "AnswerBlock" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AnswerBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnswerBlock_id_key" ON "AnswerBlock"("id");
