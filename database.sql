--DATABASE "open_dj"

CREATE TABLE "tag_types" (
    "id" SERIAL PRIMARY KEY,
    "type" TEXT NOT NULL
);

INSERT INTO "tag_types" ("type") VALUES ('Genre');
INSERT INTO "tag_types" ("type") VALUES ('Theme');
INSERT INTO "tag_types" ("type") VALUES ('Maturity Rating');
INSERT INTO "tag_types" ("type") VALUES ('Tempo');
INSERT INTO "tag_types" ("type") VALUES ('Dance');