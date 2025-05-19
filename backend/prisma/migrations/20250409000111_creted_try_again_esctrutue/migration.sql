-- CreateTable
CREATE TABLE "Balconista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "OrderId" INTEGER NOT NULL,
    CONSTRAINT "Table_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "OrderId" INTEGER NOT NULL,
    CONSTRAINT "Product_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantify" INTEGER NOT NULL,
    "BalconistaId" INTEGER NOT NULL,
    CONSTRAINT "Order_BalconistaId_fkey" FOREIGN KEY ("BalconistaId") REFERENCES "Balconista" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Balconista_email_key" ON "Balconista"("email");
