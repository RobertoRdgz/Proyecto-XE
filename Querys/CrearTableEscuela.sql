CREATE TABLE `Escuela`
(
 `Matricula` VARCHAR(15) NOT NULL ,
 `Nombre`    VARCHAR(50) NOT NULL ,
 `Logo`      VARCHAR(100) NOT NULL ,
 `Direccion` VARCHAR(150) NOT NULL ,
 `Telefono`  VARCHAR(10) NOT NULL ,
 `Correo`    VARCHAR(45) NOT NULL ,
 `NoAlumnos` INTEGER NOT NULL ,

PRIMARY KEY (`Matricula`)
);