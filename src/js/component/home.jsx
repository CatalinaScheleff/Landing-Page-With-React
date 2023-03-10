import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx"
//TODO ES UN COMPONENTE
//un componente es una funcion que ccomienza con Mayúscula
//los componentes sonn funciones que RETORNAN HTML
// los componentes se llaman como si fueran una etiqueta HTLM
function Cimiento () {
	return <div>
		<Navbar/>
		<div className="container">
		<Jumbotron/>
		
		<div className="row justify-content-center" >
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		</div>
		<Footer/>
		
	</div>
}
//equivalente a module.export
export default Cimiento;