import { integer, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: serial("id").primaryKey(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
}); // Create the "sports" table

export const eventsTable = pgTable("events", {
  id: serial("id").primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull(),
description2: varchar({ length: 255 }).default(''),
}); // Create the "events" table
