# Proyecto de prueba para TODO 1
## Autor: Camilo Giraldo

# El proyecto presenta una arquitectura de capas 
- capa vista
- capa de servicios
- capa de DTO
- capa JPA


# Springboot-Backend
- Se implementaron las siguientes tecnologias: 
- Java 8
- SpringBoot MVC
- RESTFull
- JSON Web Token (jwt)
- JPArepository
- MYSQL mariaDB
- editor Eclipse JEE

## Ejecucion del back
- se debe exportar la base de datos MYSQL hullstore.sql
- se ejecuta el servicio .jar que esta en el target del aplicativo
- ejecutar desde eclipse como SpringBootAplication

## src/main/resource/application.properties
encontramos las propiedades del aplicativo tales como:
-- conexion a la base de datos
-- tiempo expiracion del token
-- generar ddl de base de datos (se recomienda tenerla en false ya que genera nuevamente la base de datos);

# hulk-store-front
- Se implementaron las siguientes tecnologias: 
- framework Angular 4
- Node js
- NPM
- Angular CLI
- SCSS
- Editor VSCode

## Instalacion componente web
- se debe tener instalado node.js
- clonar el proyecto
- nos situamos en el directorio raiz "hullk-store-web/"
- se debe ejecutar el comando " npm -install " para obtener los node_modules
- se ejecuta el comando " ng serve " para iniciar el servidor
- en el browser de preferencia accedemos a la URL hhtp://localhost:4200
- usuario: cagiraldo, contraseña: 123456
