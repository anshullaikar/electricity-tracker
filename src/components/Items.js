import React from "react";

const Items = (props) => {
	return (
		<div>
			<h1 className="mb-4">Budget Details </h1>
			<form>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Total Budget (kWh)
					</label>
					<input
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Text input"
						value={props.budget.Kwh}
						onChange={(e) => {
							e.preventDefault();
							props.setBudget({ Kwh: e.target.value });
						}}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Cost per kWh
					</label>
					<input
						value={props.userCost}
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Text input"
						onChange={(e) => {
							e.preventDefault();
							props.setUserCost(e.target.value);
						}}
					/>
				</div>
			</form>
			<h3 className="m-4 ">Add an item</h3>
			<form action="">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Name
					</label>
					<input
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Text input"
						value={props.newItem.name}
						onChange={(e) => {
							e.preventDefault();
							props.setNewItem((prev) => ({
								name: e.target.value,
								rate: prev.rate,
								hours: prev.hours,
							}));
						}}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Rate in kWh per hour
					</label>
					<input
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="rate-new-item"
						type="number"
						placeholder="Text input"
						value={props.newItem.rate}
						onChange={(e) => {
							e.preventDefault();
							props.setNewItem((prev) => ({
								rate: e.target.value,
								name: prev.name,
								hours: prev.hours,
							}));
						}}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Hours Used
					</label>
					<input
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="number"
						placeholder="Text input"
						value={props.newItem.hours}
						onChange={(e) => {
							e.preventDefault();
							props.setNewItem((prev) => ({
								hours: e.target.value,
								rate: prev.rate,
								name: prev.name,
							}));
						}}
					/>
				</div>
				<div className="flex items-center justify-between">
					<div className="m-auto">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
							type="button"
							onClick={(e) => {
								e.preventDefault();
								console.log(props.newItem);
								props.handleNewItemSubmit(props.newItem);
							}}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
			{/* <h3 className="m-4 ">Add hours to existing item</h3>

			<form>
				<div class="mb-4 flex items-center justify-center flex-col">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						Item
					</label>
					<div class="relative">
						<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
							<option>Select dropdown</option>
							<option>With options</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Hours
					</label>
					<input
						class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="existing-item-hours"
						type="number"
						placeholder="Hours to add"
					/>
				</div>
				<div className="flex items-center justify-between">
					<div className="m-auto">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
							type="button"
						>
							Submit
						</button>
					</div>
				</div>
			</form> */}
		</div>
	);
};

export default Items;
