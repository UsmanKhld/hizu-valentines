import React, { useState } from "react";
import "./AnimatedBox.css";

const AnimatedBox = () => {
	const [animate, setAnimate] = useState(false);

	const handleClick = () => {
		setAnimate(true);
	};

	const handleReset = () => {
		setAnimate(false);
	};

	return (
		<div className="outside">
			<button
				className="border border-black absolute top-10 left-10 z-10"
				onClick={handleReset}
			>
				reset
			</button>
			<div className="container">
				<div
					className={`box ${animate ? "animate" : ""}`}
					onClick={() => {
						if (!animate) {
							// Your code here (only runs if animate is true)
							handleClick();
						} else {
							console.log("Clicked when animate is true");
						}
					}}
				></div>
				<div
					className={`triangle ${animate ? "animate" : ""}`}
					onClick={() => {
						if (!animate) {
							// Your code here (only runs if animate is true)
							handleClick();
						} else {
							console.log("Clicked when animate is true");
						}
					}}
				></div>
			</div>
		</div>
	);
};

export default AnimatedBox;
