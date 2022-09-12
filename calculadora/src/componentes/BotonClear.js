import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

export const BotonClear = props =>
	<div className="boton-clear">
		{props.children}
	</div>;

/* 	 <div className="boton-clear">
    Clear        
</div> OTRA OPCION En este caso se puede poner directamente Clear(nombre <BotonClear> que tienen en el App.js... con el resto de botones no, poq cada instancia de <Boton> tenia valores diferentes
  */

export default BotonClear;
