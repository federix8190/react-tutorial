import GrillaPersonas from './components/GrillaPersonas';

var personas = [];

fetch('/api/personas')
.then((resp) => resp.json())
.then(function(data) {
    // Here you get the data to modify as you please
    data.lista.forEach(a => {
        personas.push(a);
    });
}).catch(function(error) {
    // If there is any error you will catch them here
});

ReactDOM.render(
    <GrillaPersonas id="customers" data={personas} />, 
    document.getElementById('root2')
);