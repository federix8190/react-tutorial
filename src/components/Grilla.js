import React, { Component } from 'react';
import ObjectRow from './common/ObjectRow';
import ObjectCol from './common/ObjectCol';

class Grilla extends Component {

    

    render() {

        /*fetch('/api/personas')
        .then(res => console.log(res))
        .catch(console.log)*/

        fetch('/api/personas')
        .then((resp) => resp.json())
        .then(function(data) {
            // Here you get the data to modify as you please
            console.log('Response data : ', data.lista);
        }).catch(function(error) {
            // If there is any error you will catch them here
        });   

        var columnas = ['Hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

        var datos = [
            {hora:'08:00', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
            {hora:'08:30', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
            {hora:'09:00', 'lunes':'', 'martes':'X', 'miercoles':'', 'jueves':''},
            {hora:'09:30', 'lunes':'X', 'martes':'X', 'miercoles':'', 'jueves':''},
            {hora:'10:00', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
        ];

        var cols = [];
        for (var i = 0; i < columnas.length; i++) {
            cols.push(<ObjectCol name={columnas[i]} />);
        }
        var rows = [];    
        for (var i = 0; i < datos.length; i++) {
            var d = datos[i];
            rows.push(<ObjectRow hora={d.hora} lunes={d.lunes} martes={d.martes} 
                miercoles={d.miercoles} jueves={d.jueves}/>);
        }

        return (
            <table id={this.props.id}>
                <thead><tr>{cols}</tr></thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default Grilla;
