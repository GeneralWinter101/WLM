import React from "react";
import './filteredBox.css';

const FilteredBox = props => {
	return (
		<div className="box-container">
			<img className="box-venue-image" alt="Miejsce na Twoje wesele" src={props.image} />
			<h2 className="box-venue-title">
				{props.name}
			</h2>
			<div className="box-dates">Dostępność:
					<select className="box-dates-select">
					<option className="box-dates-check" value="0">Sprawdź</option>
					{props.available.map((date) => <option className="box-dates-option" key={date.toString()} value={date} >{date}</option>
					)}
				</select>
			</div>
			<div className="box-guest-price-container">
				<h4 className="box-guest-number">
					{props.guests.min} - {props.guests.max} osób
						</h4>
				<h4 className="box-price">
					{props.price} PLN/os.
						</h4>
			</div>
			<p className="box-venue-description">
				{props.opis}
			</p>
		</div>
	)
}


export default FilteredBox;