import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SalvaItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    //ComponentDidMount()
    useEffect(() => {
        axios('https://api.mercadolibre.com/sites/MLA/search?q=salvavidas')
            .then(results => setDatos(results.data.results))
            .catch(error => console.log(error))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default SalvaItemListContainer;