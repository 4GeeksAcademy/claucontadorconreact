import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondscounter";

//create your first component
const Home = ({ digito, digito2, digito3, digito4, digito5, digito6 }) => {
	return (
		<div className="text-center bg-dark p-5">
			<SecondsCounter seconds={digito} digito2={digito2} digito3={digito3} digito4={digito4} digito5={digito5} digito6={digito6} />
		</div>
	);
};

export default Home;
