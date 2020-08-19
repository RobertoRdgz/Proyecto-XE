CREATE TABLE `Grupo`
(
 `idGrupo`        INTEGER NOT NULL ,
 `Nombre`         VARCHAR(3) NOT NULL ,
 `NoAlumnos`      INTEGER NOT NULL ,
 `idGradoEscolar` INTEGER NOT NULL ,

PRIMARY KEY (`idGrupo`),
KEY `fkIdx_63` (`idGradoEscolar`),
CONSTRAINT `FK_63` FOREIGN KEY `fkIdx_63` (`idGradoEscolar`) REFERENCES `GradoEscolar` (`idGradoEscolar`)
);