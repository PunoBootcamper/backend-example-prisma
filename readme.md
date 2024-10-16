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

Migrar a base de datos vacía recien configurada
npx prisma migrate deploy


# Todo

Basarse en el video de fazt y establecer todas las rutas
Simular el registro basandose en el video de fazt
Login
Encriptación
jwt
diseño en dektop
