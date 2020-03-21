import React, { Component } from 'react';
import GrillaPersonas from '../components/GrillaPersonas';
import Grilla from '../components/common/Grilla';

class PersonasPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        //var columnas = ['nombre', 'apellido', 'cedula', 'direccion'];
        var columnas = [
            {'name':'nombre', 'title':'Nombres', 'width':'25%'},
            {'name':'apellido', 'title':'Apellidos', 'width':'25%'},
            {'name':'cedula', 'title':'Cedula', 'width':'15%'},
            {'name':'direccion', 'title':'Direccion', 'width':'35%'}
        ];
        var ciudadesCols = [
            {'name':'id', 'title':'Codigo', 'width':'25%'},
            {'name':'nombre', 'title':'Ciudad','width':'75%'},
        ];

        /*ReactDOM.render(
            <Grilla id="customers" apiUrl="/api/personas" cols={columnas} />,
                document.getElementById('root')
          );*/

        return (
            <fragment>
                <Grilla id="customers" class="grilla" apiUrl="/api/personas" cols={columnas} />
                <Grilla id="ciudades" class="grilla" apiUrl="/api/ciudades" cols={ciudadesCols} />
            </fragment>
        );
    }
}

export default PersonasPage;