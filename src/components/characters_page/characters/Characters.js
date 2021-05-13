import {useEffect, useState} from "react";
import Character from '../character/Character';

export default function Characters(props) {
    let {match:{url}}=props;
    let [characters, setCharacters] = useState([]);
    console.log(characters);
    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/futurama/cast");
        const json = await resp.json();
        setCharacters(json);
    }
    useEffect(() => {
        // fetch("https://api.sampleapis.com/futurama/characters")
        //     .then(value => value.json())
        //     .then(value => {console.log(value)
        //         setCharacters([...value]);
        //     });

        fetchData();

    }, []);



return (
    <div>
        {
            characters.map(value => <Character key={value.id} item={value} url={url}/>)
        }
    </div>
);
}