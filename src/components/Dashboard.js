import React from "react";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Items from "./Items";

const Dashboard = () => {
	let [items, setItems] = useState([]);
	let [newItem, setNewItem] = useState({
		name: "enter here",
		rate: 0,
		hours: 0,
	});
	let [budget, setBudget] = useState({ Kwh: 500, rupees: 1000 });
	let [total, setTotal] = useState({ Kwh: 0, bill: 0 });
	let [userCost, setUserCost] = useState(6.09);

	const calcPercent = (num, denom) => {
		return (100 * num) / denom;
	};
	let handleNewItemSubmit = (item) => {
		setItems((prevItems) => {
			return [...prevItems, item];
		});
	};
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
	}, [items]);
	const getTotalUsage = () => {
		let sum = 0;
		items.map((item) => {
			sum += item.hours * item.rate;
		});
		return sum;
	};
	return (
		<div>
			<h2 className="font-bold text-xl lg:text-3xl p-4">
				Total Electricity Usage
			</h2>
			<div
				class="progressdiv"
				data-percent={calcPercent(getTotalUsage(), budget.Kwh)}
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
			<h2 className="text-red-500 capitalize text-xl lg:text-2xl py-3 m-4">
				Total bill: ₹{(getTotalUsage()*userCost).toFixed(2)}
			</h2>
			<h3>Total budget in kWh (500 is default): {budget.Kwh}</h3>
			<h3>Cost per Kwh: {userCost}</h3>
			<br />

			<h1>Usage per item</h1>
			<div className="flex flex-wrap md:flex-row flex-col justify-center items-center">
				{items.map((item) => {
					return (
						<ItemCard item={item} calcPercent={calcPercent} budget={budget} />
					);
				})}
			</div>
			<Items
				budget={budget}
				setBudget={setBudget}
				userCost={userCost}
				setUserCost={setUserCost}
				items={items}
				setItems={setItems}
				newItem={newItem}
				setNewItem={setNewItem}
				handleNewItemSubmit={handleNewItemSubmit}
			/>
		</div>
	);
};

export default Dashboard;
