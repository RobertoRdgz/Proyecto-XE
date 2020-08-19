CREATE TABLE `Materia`
(
 `idMateria`      INTEGER NOT NULL ,
 `Nombre`         VARCHAR(30) NOT NULL ,
 `Descripcion`    VARCHAR(150) NOT NULL ,
 `idGradoEscolar` INTEGER NOT NULL ,

PRIMARY KEY (`idMateria`),
KEY `fkIdx_109` (`idGradoEscolar`),
CONSTRAINT `FK_109` FOREIGN KEY `fkIdx_109` (`idGradoEscolar`) REFERENCES `GradoEscolar` (`idGradoEscolar`)
);