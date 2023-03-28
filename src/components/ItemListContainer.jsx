import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    var idC = idCategory ? idCategory : 'pelotas';
    //ComponentDidMount()
    useEffect(() => {
        axios('https://api.mercadolibre.com/sites/MLA/search?q='+ idC)
            .then(results => setDatos(results.data.results))
            .catch(error => console.log(error))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
        
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;