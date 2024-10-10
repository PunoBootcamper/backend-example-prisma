# Pasos

Instalar postman
Instalar postgres
crear cuenta user, password
CREATE ROLE sammy WITH LOGIN PASSWORD 'your_password';
Otorgar privilegios
ALTER ROLE sammy CREATEDB;
CREATE DATABASE "db-name" OWNER sammy;
configurar en prisma
DATABASE_URL="postgresql://sammy:your_password@localhost:5432/my-blog?schema=public"
