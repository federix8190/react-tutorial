import React, { Component } from 'react';
import ObjectRow from './common/ObjectRow';
import ObjectCol from './common/ObjectCol';

class GrillaPersonas extends Component {

    constructor(props) {
        super(props);
        this.columnas = ['nombre', 'apellido', 'cedula', 'direccion'];
        this.state = {rows: []};
    }

    componentDidMount() {
        var self = this;
        fetch('/api/personas')
            .then((resp) => resp.json())
            .then(function(data) {
                var registros = [];
                data.lista.forEach(a => {
                    registros.push(<ObjectRow datos={a} columnas={self.columnas} />);
                });
                self.setState({rows: registros});
            }).catch(function(error) {
                // If there is any error you will catch them here
            }); 
    }

    render() {

        var cols = [];
        for (var i = 0; i < this.columnas.length; i++) {
            cols.push(<ObjectCol name={this.columnas[i]} />);
        }

        return (
            <table id={this.props.id}>
                <thead><tr>{cols}</tr></thead>
                <tbody>{this.state.rows}</tbody>
            </table>
        );
    }
}

export default GrillaPersonas;
