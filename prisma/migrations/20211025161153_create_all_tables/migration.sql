-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "age" INTEGER NOT NULL,
    "preferredGenre" VARCHAR(40) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bandId" INTEGER NOT NULL,
    "venueId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venue" (
    "id" SERIAL NOT NULL,
    "buildingName" VARCHAR(40) NOT NULL,
    "city" VARCHAR(40) NOT NULL,
    "street" VARCHAR(40) NOT NULL,
    "postCode" VARCHAR(40) NOT NULL,

    CONSTRAINT "Venue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "genre" VARCHAR(40) NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOnCustomers" (
    "eventId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "EventOnCustomers_pkey" PRIMARY KEY ("eventId","customerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Band_eventId_key" ON "Band"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventOnCustomers_eventId_key" ON "EventOnCustomers"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventOnCustomers_customerId_key" ON "EventOnCustomers"("customerId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Band" ADD CONSTRAINT "Band_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOnCustomers" ADD CONSTRAINT "EventOnCustomers_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOnCustomers" ADD CONSTRAINT "EventOnCustomers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
