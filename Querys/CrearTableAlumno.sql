CREATE TABLE `Alumno`
(
 `idPersona`      VARCHAR(6) NOT NULL ,
 `Matricula`      VARCHAR(15) NOT NULL ,
 `idGradoEscolar` INTEGER NOT NULL ,

PRIMARY KEY (`idPersona`),
KEY `fkIdx_122` (`idGradoEscolar`),
CONSTRAINT `FK_122` FOREIGN KEY `fkIdx_122` (`idGradoEscolar`) REFERENCES `GradoEscolar` (`idGradoEscolar`),
KEY `fkIdx_23` (`idPersona`),
CONSTRAINT `FK_23` FOREIGN KEY `fkIdx_23` (`idPersona`) REFERENCES `Persona` (`idPersona`)
);
