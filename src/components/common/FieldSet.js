import React, { Component } from 'react';

class FieldSet extends Component {
	render() {
		return <span>
			<label class="control-label" for="input-nombres">Nombre</label>
			<input data-attr="kml.nombres" type="text" class="alpha grid_11" requiered></input>
		</span>;
	}
}
export default FieldSet;