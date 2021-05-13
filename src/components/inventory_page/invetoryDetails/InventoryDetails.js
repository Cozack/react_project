import {useEffect, useState} from "react";

export default function Inventory(props) {
    let {match:{params:{id}}}=props;
    let [invent, setInvent] = useState([]);
    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/futurama/inventory/"+id);
        const json = await resp.json();
        setInvent(json);
    }
    useEffect(() => {

        fetchData();

    }, []);



    return (
        <div>
            {
                invent && <h4><h5>ID : {invent.id}</h5> <h5>Category : {invent.category}</h5><h5>Description : {invent.description}</h5><h5>Slogan : {invent.slogan}</h5>
                    <h5>Price : {invent.price}</h5> <h5>Stock : {invent.stock}</h5>
                </h4>
            }
        </div>
    );
}