import {useEffect, useState} from "react";
import Invent from '../invent/Invent';
import '../css.css'

export default function Inventory(props) {
    let {match:{url}}=props;
    let [inventory, setInventory] = useState([]);
    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/futurama/inventory");
        const json = await resp.json();
        setInventory(json);
    }
    useEffect(() => {

        fetchData();

    }, []);



    return (
        <div>
            {
                inventory.map(value => <Invent key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}