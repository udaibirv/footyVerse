set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial NOT NULL,
  "username" TEXT NOT NULL,
  "hashedPassword" TEXT NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
 OIDS=FALSE
);
