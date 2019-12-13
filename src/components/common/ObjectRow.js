import React, { Component } from 'react';

class ObjectRow extends Component {

	render() {
        var datos = [];

        let styles = {
            width: this.props.width,
        };

        var columnas = this.props.columnas;
        for (var i = 0; i < columnas.length; i++) {
            var col = columnas[i];
            datos.push(<td style={styles}>{this.props.datos[col]}</td>);
        }
        return <tr key={this.props.key}>{datos}</tr>;
	}
}

export default ObjectRow;