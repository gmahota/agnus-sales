-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT,
    "userId" INTEGER,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "vat" TEXT,
    "province" TEXT,
    "phoneNumber" TEXT,
    "cellphone" TEXT,
    "email" TEXT,
    "status" TEXT,
    "json" TEXT
);

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "vat" TEXT,
    "province" TEXT,
    "phoneNumber" TEXT,
    "cellphone" TEXT,
    "email" TEXT,
    "status" TEXT,
    "json" TEXT
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "description" TEXT,
    "price" REAL,
    "json" TEXT
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "description" TEXT NOT NULL,
    "status" TEXT,
    "json" TEXT
);

-- CreateTable
CREATE TABLE "DocumentType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "json" TEXT
);

-- CreateTable
CREATE TABLE "DocumentSerie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "begin" DATETIME,
    "end" DATETIME
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "date" DATETIME NOT NULL,
    "customerId" INTEGER NOT NULL,
    "name" TEXT,
    "status" TEXT,
    "totalVat" REAL NOT NULL,
    "totalDiscount" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "description" TEXT,
    "unity" TEXT,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "vatCode" TEXT,
    "totalVat" REAL NOT NULL,
    "total" REAL NOT NULL,
    "status" TEXT,
    "projectId" INTEGER,
    "orderId" INTEGER NOT NULL,
    CONSTRAINT "OrderItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItemVariant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "totalVat" REAL NOT NULL,
    "vatCode" TEXT,
    "total" REAL NOT NULL,
    "status" TEXT,
    "orderItemId" INTEGER NOT NULL,
    CONSTRAINT "OrderItemVariant_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" INTEGER NOT NULL,
    "serieId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "code" TEXT,
    "date" DATETIME NOT NULL,
    "customerId" INTEGER NOT NULL,
    "name" TEXT,
    "status" TEXT,
    "totalVat" REAL NOT NULL,
    "totalDiscount" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "total" REAL NOT NULL,
    "json" TEXT,
    CONSTRAINT "Document_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Document_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DocumentType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Document_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "DocumentSerie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocumentItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT,
    "description" TEXT,
    "unity" TEXT,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "vatCode" TEXT,
    "totalVat" REAL NOT NULL,
    "total" REAL NOT NULL,
    "status" TEXT,
    "projectId" INTEGER,
    "documentId" INTEGER NOT NULL,
    CONSTRAINT "DocumentItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DocumentItem_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocumentItemVariant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    "totalGross" REAL NOT NULL,
    "totalVat" REAL NOT NULL,
    "vatCode" TEXT,
    "total" REAL NOT NULL,
    "status" TEXT,
    "documentItemId" INTEGER NOT NULL,
    CONSTRAINT "DocumentItemVariant_documentItemId_fkey" FOREIGN KEY ("documentItemId") REFERENCES "DocumentItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentType_code_key" ON "DocumentType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentSerie_code_key" ON "DocumentSerie"("code");
