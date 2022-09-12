import './App.css';
import Logo from './imagenes/abaco.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from "react";


function App () {
	const [ input, setInput ] = useState("");


	return (
		<div className="App">
			<div className="logo-contenedor">
				<img src={Logo} className="logo-calculadora" alt="Logo Calculadora" />
			</div>
			<div className="contenedor-calculadora">
				<Pantalla input={input} />
				<div className="fila">
					<Boton>1</Boton>
					<Boton>2</Boton>
					<Boton>3</Boton>
					<Boton>+</Boton>
				</div>
				<div className="fila">
					<Boton>4</Boton>
					<Boton>5</Boton>
					<Boton>6</Boton>
					<Boton>-</Boton>
				</div>
				<div className="fila">
					<Boton>7</Boton>
					<Boton>8</Boton>
					<Boton>9</Boton>
					<Boton>*</Boton>
				</div>
				<div className="fila">
					<Boton>=</Boton>
					<Boton>0</Boton>
					<Boton>.</Boton>
					<Boton>/</Boton>
				</div>
				<div className="fila">
					<BotonClear>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
