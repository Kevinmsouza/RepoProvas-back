CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	"subjectId" integer NOT NULL,
	"teacherId" integer NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"termId" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects_teachers" (
	"id" serial NOT NULL,
	"subjectId" integer NOT NULL,
	"teacherId" integer NOT NULL,
	CONSTRAINT "subjects_teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "terms" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "terms_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id");


ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("termId") REFERENCES "terms"("id");


ALTER TABLE "subjects_teachers" ADD CONSTRAINT "subjects_teachers_fk0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id");
ALTER TABLE "subjects_teachers" ADD CONSTRAINT "subjects_teachers_fk1" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id");


INSERT INTO categories (name) VALUES ('P1');
INSERT INTO categories (name) VALUES ('P2');
INSERT INTO categories (name) VALUES ('P3');
INSERT INTO categories (name) VALUES ('2ch');
INSERT INTO categories (name) VALUES ('Outras');


INSERT INTO terms (name) VALUES ('1°');
INSERT INTO terms (name) VALUES ('2°');
INSERT INTO terms (name) VALUES ('Eletivas');


INSERT INTO subjects (name, "termId") VALUES ('Calculo I', 1);
INSERT INTO subjects (name, "termId") VALUES ('Calculo II', 2);
INSERT INTO subjects (name, "termId") VALUES ('Calculo III', 1);
INSERT INTO subjects (name, "termId") VALUES ('Calculo IV', 2);
INSERT INTO subjects (name, "termId") VALUES ('Fisica I', 1);
INSERT INTO subjects (name, "termId") VALUES ('Fisica II', 2);
INSERT INTO subjects (name, "termId") VALUES ('Historia da Computação', 3);
INSERT INTO subjects (name, "termId") VALUES ('Etica e tecnologia', 3);


INSERT INTO teachers (name) VALUES ('Abraão Almeida');
INSERT INTO teachers (name) VALUES ('Bryan Borges');
INSERT INTO teachers (name) VALUES ('Carlos Caxías');
INSERT INTO teachers (name) VALUES ('Daniela Dantas');
INSERT INTO teachers (name) VALUES ('Elis Euclides');


INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (1, 1);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (2, 1);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (3, 2);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (3, 3);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (4, 2);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (4, 3);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (5, 4);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (6, 4);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (7, 5);
INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (8, 5);