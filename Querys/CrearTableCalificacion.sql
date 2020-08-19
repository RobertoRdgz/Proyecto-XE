CREATE TABLE `Calificacion`
(
 `idCalificacion` INTEGER NOT NULL ,
 `idPersona`      VARCHAR(6) NOT NULL ,
 `idMateria`      INTEGER NOT NULL ,
 `Valor`          FLOAT NULL ,
 `Parcial`        VARCHAR(20) NOT NULL ,

PRIMARY KEY (`idCalificacion`),
KEY `fkIdx_36` (`idPersona`),
CONSTRAINT `FK_36` FOREIGN KEY `fkIdx_36` (`idPersona`) REFERENCES `Alumno` (`idPersona`),
KEY `fkIdx_47` (`idMateria`),
CONSTRAINT `FK_47` FOREIGN KEY `fkIdx_47` (`idMateria`) REFERENCES `Materia` (`idMateria`)
);
