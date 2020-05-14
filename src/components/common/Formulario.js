import React, { Component } from 'react';
import ObjectRow from './ObjectRow';
import FieldSet from './FieldSet';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.apiUrl = props.apiUrl;
        this.columnas = props.cols;
        this.state = {rows: []};
    }

    componentDidMount() {
        var self = this;
        fetch(self.apiUrl)
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
            cols.push(<FieldSet />);
        }
        return (
            <div class="box-body">
            <form class="grid_11">
                 <fieldset>{cols}</fieldset>
            </form>
            </div>
        );
    }
}

export default Formulario;
