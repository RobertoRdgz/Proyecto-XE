CREATE TABLE `Profesor`
(
 `idPersona`      VARCHAR(6) NOT NULL ,
 `Cedula`         VARCHAR(15) NOT NULL ,
 `Escolaridad`    VARCHAR(45) NOT NULL ,
 `idGradoEscolar` INTEGER NOT NULL ,

PRIMARY KEY (`idPersona`),
KEY `fkIdx_119` (`idGradoEscolar`),
CONSTRAINT `FK_119` FOREIGN KEY `fkIdx_119` (`idGradoEscolar`) REFERENCES `GradoEscolar` (`idGradoEscolar`),
KEY `fkIdx_17` (`idPersona`),
CONSTRAINT `FK_17` FOREIGN KEY `fkIdx_17` (`idPersona`) REFERENCES `Persona` (`idPersona`)
);