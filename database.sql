CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "oyster_types" (
	"id" serial NOT NULL,
	"global_location" BOOLEAN NOT NULL,
	"name" varchar(1000) NOT NULL UNIQUE,
	"description" varchar(1000) NOT NULL,
	CONSTRAINT "oyster_types_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "inventory" (
	"user_id" integer NOT NULL,
	"oyster_types_id" integer NOT NULL,
	"id" serial NOT NULL,
	"ship_date" DATE,
	"last_date_used" DATE,
	"original_count" integer NOT NULL,
	"previous_count" integer NOT NULL,
	"current_count" integer NOT NULL,
	"oyster_name" varchar(255) NOT NULL,
	CONSTRAINT "inventory_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Untitled" (

) WITH (
  OIDS=FALSE
);





ALTER TABLE "inventory" ADD CONSTRAINT "inventory_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_fk1" FOREIGN KEY ("oyster_types_id") REFERENCES "oyster_types"("id");


