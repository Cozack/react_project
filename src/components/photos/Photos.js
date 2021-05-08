import {useState, useEffect} from 'react';
import Photo from '../photo/Photo';
import axiosInstance from '../../services/api';
import './Photos.css';

export default function Photos (){
    let [photos, setPhotos] = useState([])
    let [photo, setPhoto] = useState(null)

    useEffect(() => {
       axiosInstance.get('/photos').then(value => setPhotos([...value.data]));
    },[]);

let details = (id)=>{
        let newDetails = photos.find(value => value.id ===id);
    setPhoto(newDetails)
}

    return (
      <div className={'wrapper'}>
          <div className={'first'}>
              {
                  photos.map((value) => <Photo key={value.id} item={value} details={details}/> )
              }
          </div>
          <div className={'second'}>
              {
                  photo? <h4>{photo.title}</h4>: <div>titles are missing</div>
              }
          </div>
      </div>
  );
}