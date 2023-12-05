import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import IRTLogo from "../../img/LogoMakr-9eCGAY.png";
import irbtackle from "../../img/irbdivetackle_1_f.jpg";
import marlinJump from "../../img/MarlinJump.jpg";
import IRTinside1 from "../../img/IRTinside1.jpg";
import aboveBoat from "../../img/aboveBoat.jpg";
import IRTinside2 from "../../img/IRTinside2.jpg";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	const heroImages = [
		irbtackle,
		marlinJump,
		IRTinside1,
		aboveBoat,
		IRTinside2
	];

	return (
		<div className="container-fluid">
			<div className="row justify-content-lg-center pb-4" id="titleArea">
				<div className="col-lg-3 ps-5">
					<p className="pageHeaderLeft lh-base"> The West Coasts' only complete Billfish outfitter!
					</p>
				</div>
				<div className="col-lg-6 col-sm-4 d-flex flex-column">
					<h1 className="mt-3 pb-n5" id="pageTitle">Bill Greenway's</h1><br></br>
					<img ClassName="pt-n5" id="titleImage" src={IRTLogo} />
				</div>
				<div className="col col-lg-3 ps-3" id="pageHeaderRight">
					<a href="https://www.google.com/maps/dir//1301+Gulf+Blvd,+Indian+Rocks+Beach,+FL+33785/@27.8959422,-82.9308991,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2f9bb8d7a3f51:0xd9bec4176373686e!2m2!1d-82.8484886!2d27.8959667?entry=ttu" 
						target="_blank"><span className="fs-5 fw-bold lh-lg">1301 N. Gulf Blvd Indian Rocks Beach, FL 33785</span></a><br></br>
					<a href="tel:7275953196"><span className="fs-5 fw-bold lh-lg">727-595-3196</span></a><br></br>
					<a href="mailto:bill@indianrockstackle.com"><span className="text-primary fs-5 fw-bold fst-italic">Bill@indianrockstackle.com</span></a>
				</div>
			</div>
			<div className="row justify-content-lg-center" id="heroSection">
				<div className="col-lg-3 ps-5" id="heroSideBar">

				</div>
				<div className="heroCarousel">
					{/* add carousel of images here */}
				</div>
			</div>
		</div>
	);
};
