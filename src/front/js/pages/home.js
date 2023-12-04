import React, { useContext } from "react";
import { Context } from "../store/appContext";
import IRTLogo from "../../img/LogoMakr-9eCGAY.png";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container" id="titleArea">
			<div className="row justify-content-lg-center">
				<div className="col col-lg-2">
					<p className="pageHeaderLeft"> The West Coasts' only complete Billfish outfitter!
					</p>
				</div>
				<div className="col-lg-8 col-sm-4 d-flex flex-column">
					<h1 className="mt-3 pb-n5" id="pageTitle">Bill Greenway's</h1><br></br>
					<img ClassName="pt-n5" id="titleImage" src={IRTLogo} />
				</div>
				<div className="col col-lg-2" id="pageHeaderRight">
					1301 N. Gulf Blvd Indian Rocks Beach, FL 33785<br></br><br></br>
					727-595-3196<br></br><br></br>
					Bill@indianrockstackle.com
				</div>
			</div>
		</div>
	);
};
