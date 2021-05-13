import {
  Link
} from "react-router-dom";
import {useEffect,useState} from 'react'
export default function CharactersDetails (props){
    console.log(props)
    let {match:{params:{id}}} = props
    let [character,setCharacter] = useState(null)

    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/futurama/cast/");
        const json = await resp.json();
        const fiind = await json.find(value => value.id === +id);
        setCharacter(fiind);
    }

    useEffect(() => {

        fetchData();

    }, [character]);

  return (
      <div>
          {
              character && <h4><h5> ID :{character.id}</h5> <h5>Name : {character.name}</h5>  <h5> Born : {character.born}</h5></h4>
          }
      </div>
  );
}