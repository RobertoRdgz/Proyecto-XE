CREATE TABLE `Persona`
(
 `idPersona`        VARCHAR(6) NOT NULL ,
 `Nombre`           VARCHAR(30) NOT NULL ,
 `Apellido_Paterno` VARCHAR(20) NOT NULL ,
 `Apellido_Materno` VARCHAR(20) NOT NULL ,
 `Fecha_Nacimiento` DATE NULL ,
 `Direccion`        VARCHAR(150) NULL ,
 `Telefono`         VARCHAR(10) NULL ,
 `Correo`           VARCHAR(45) NOT NULL ,
 `TipoSangre`       VARCHAR(5) NULL ,
 `Sexo`             VARCHAR(15) NULL ,
 `Estado`           VARCHAR(20) NOT NULL ,
 `Fecha_Ingreso`    DATE NULL ,
 `Tipo`             VARCHAR(20) NOT NULL ,
 `Usuario`          VARCHAR(8) NOT NULL ,
 `Constraseña`      VARCHAR(10) NOT NULL ,

PRIMARY KEY (`idPersona`)
);