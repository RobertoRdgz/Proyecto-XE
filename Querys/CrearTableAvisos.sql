CREATE TABLE `Avisos`
(
 `idAviso`        INTEGER NOT NULL ,
 `Nombre`         VARCHAR(30) NOT NULL ,
 `Descripcion`    VARCHAR(150) NOT NULL ,
 `Tipo`           VARCHAR(20) NOT NULL ,
 `Fecha`          DATE NULL ,
 `Fecha_Creacion` DATE NOT NULL ,

PRIMARY KEY (`idAviso`)
);
