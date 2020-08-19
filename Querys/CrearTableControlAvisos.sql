CREATE TABLE `ControlAvisos`
(
 `idControlAviso` INTEGER NOT NULL ,
 `Estatus`        VARCHAR(20) NOT NULL ,
 `idAviso`        INTEGER NOT NULL ,
 `idPersona`      VARCHAR(6) NOT NULL ,

PRIMARY KEY (`idControlAviso`),
KEY `fkIdx_92` (`idAviso`),
CONSTRAINT `FK_92` FOREIGN KEY `fkIdx_92` (`idAviso`) REFERENCES `Avisos` (`idAviso`),
KEY `fkIdx_95` (`idPersona`),
CONSTRAINT `FK_95` FOREIGN KEY `fkIdx_95` (`idPersona`) REFERENCES `Persona` (`idPersona`)
);