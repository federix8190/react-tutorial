import React, { Component } from 'react';
import GrillaPersonas from '../components/GrillaPersonas';
import Grilla from '../components/common/Grilla';

class PersonasPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var columnas = ['nombre', 'apellido', 'cedula', 'direccion'];
        var ciudadesCols = ['id', 'nombre'];

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