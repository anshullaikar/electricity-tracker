import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
const ItemCard = (props) => {
	useEffect(() => {
		var totalProgress, progress;
		const circles = document.querySelectorAll(".progress");
		for (var i = 0; i < circles.length; i++) {
			totalProgress = circles[i]
				.querySelector("circle")
				.getAttribute("stroke-dasharray");
			progress = circles[i].parentElement.getAttribute("data-percent");

			circles[i].querySelector(".bar").style["stroke-dashoffset"] =
				(totalProgress * progress) / 100;
		}
	}, []);
	return (
		<div className="w-4/5 md:w-1/3 m-0">
			<h2>{props.item.name}</h2>
			<div
				class="progressdiv"
				data-percent={props.calcPercent(props.item.rate * props.item.hours, props.budget.Kwh)}
			>
				<svg
					class="progress"
					width="178"
					height="178"
					viewport="0 0 100 100"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						r="80"
						cx="89"
						cy="89"
						fill="transparent"
						stroke-dasharray="502.4"
						stroke-dashoffset="0"
					></circle>
					<circle
						class="bar"
						r="80"
						cx="89"
						cy="89"
						fill="transparent"
						stroke-dasharray="502.4"
						stroke-dashoffset="0"
					></circle>
				</svg>
			</div>
		</div>
	);
};

export default ItemCard;
