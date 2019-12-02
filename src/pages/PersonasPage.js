import React, { Component } from 'react';
import GrillaPersonas from '../components/GrillaPersonas';
import Grilla from '../components/common/Grilla';

class PersonasPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var columnas = ['nombre', 'apellido', 'cedula', 'direccion'];

        /*ReactDOM.render(
            <Grilla id="customers" apiUrl="/api/personas" cols={columnas} />,
                document.getElementById('root')
          );*/

        return (
            <Grilla id="customers" apiUrl="/api/personas" cols={columnas} />
        );
    }
}

export default PersonasPage;