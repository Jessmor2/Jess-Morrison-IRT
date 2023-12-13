import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/Carousel";
import IRTLogo from "../../img/LogoMakr-9eCGAY.png";
import BaseRods from "../../img/BaseRods.jpg";
import AftcoApparel from "../../img/AftcoApparel.jpg";
import BaseLures from "../../img/Lures.jpg";
import IRTFront from "../../img/irbdivetackle_1_f.jpg";
import Marlin from "../../img/MarlinJump.jpg";
import IRTinside from "../../img/IRTinside1.jpg";
import SnookOnLine from "../../img/Snook_ontheLine.jpg";
import OlliesCove from "../../img/IRTinside2.jpg";
import AboveBoat from "../../img/aboveBoat.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const carouselImages = [
		IRTFront,
		Marlin,
		IRTinside,
		SnookOnLine,
		OlliesCove,
		AboveBoat
	];

	const changeCarouselImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
	};

	useEffect(() => {
		const intervalId = setInterval(changeCarouselImage, 5000);
		return () => clearInterval(intervalId);
	}, {});

	return (
		<div className="container-fluid">
			<div className="row justify-content-lg-center pb-4" id="titleArea">
				<div className="col-lg-3 ps-5">
					<p className="pageHeaderLeft lh-base"> The West Coasts' only complete Billfish outfitter!
					</p>
				</div>
				<div className="col-lg-6 col-sm-4 d-flex flex-column">
					<h1 className="mt-3 pb-n5" id="pageTitle">Bill Greenway's</h1><br></br>
					<img className="pt-n5" id="titleImage" src={IRTLogo} />
				</div>
				<div className="col col-lg-3 ps-3" id="pageHeaderRight">
					<a href="https://www.google.com/maps/dir//1301+Gulf+Blvd,+Indian+Rocks+Beach,+FL+33785/@27.8959422,-82.9308991,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2f9bb8d7a3f51:0xd9bec4176373686e!2m2!1d-82.8484886!2d27.8959667?entry=ttu" 
						target="_blank"><span className="fs-5 fw-bold lh-lg">1301 N. Gulf Blvd Indian Rocks Beach, FL 33785</span></a><br></br>
					<a href="tel:7275953196"><span className="fs-5 fw-bold lh-lg">727-595-3196</span></a><br></br>
					<a href="mailto:bill@indianrockstackle.com"><span className="text-primary fs-5 fw-bold fst-italic">Bill@indianrockstackle.com</span></a>
				</div>
			</div>
			<div className="row justify-content-lg-center" id="heroSection">
				<div className="col-lg-2 ps-5" id="heroSideBar">
					<button className="fs-2 font-weight-bold text-decoration-underline mb-3" id="sideMenuButton">
						<img id="sideMenuImg" src={BaseRods} />
						Rods
					</button>
					<button className="fs-2 font-weight-bold text-decoration-underline mb-3" id="sideMenuButton">
						<img id="sideMenuImg" src={AftcoApparel} />
						Apparel
					</button>
					<button className="fs-2 font-weight-bold text-decoration-underline mb-3" id="sideMenuButton">
						<img id="sideMenuImg" src={BaseLures} />
						Tackle
					</button>
				</div>
				<div className="col-lg-10" id="heroCarousel">
					<img
						className="backgroundImage"
						src={carouselImages[currentImageIndex]}
						alt="Slider Background"
					/>
				</div>
			</div>
		</div>
	);
};
