CREATE TABLE `Empleado`
(
 `idPersona`   VARCHAR(6) NOT NULL ,
 `Escolaridad` VARCHAR(45) NULL ,
 `Puesto`      VARCHAR(30) NOT NULL ,

PRIMARY KEY (`idPersona`),
KEY `fkIdx_141` (`idPersona`),
CONSTRAINT `FK_141` FOREIGN KEY `fkIdx_141` (`idPersona`) REFERENCES `Persona` (`idPersona`)
);