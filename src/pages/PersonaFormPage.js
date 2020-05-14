import React, { Component } from 'react';
import Formulario from '../components/common/Formulario';

class PersonaFormPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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

        return (
            <fragment>
                <Formulario class="grilla" apiUrl="/api/personas" cols={columnas} />
            </fragment>
        );
    }
}

export default PersonaFormPage;