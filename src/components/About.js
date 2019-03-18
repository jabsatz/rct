import React, { Component } from "react";

class About extends Component {
	state = {
		value: "",
		otherValue: "",
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<input value={this.state.value} onChange={this.handleChange} />
			</div>
		);
	}
}

export default About;
