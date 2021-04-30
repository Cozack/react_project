import './car.css';

export default function  Car(props)
{
    let {model, power, engine, owner} = props
    return (
        <div>
            <div className={`divka`}><h1>{owner}</h1>
                <h3> {model}</h3>
                <p>{engine} : {power} hp</p>
            </div>
        </div>


    );
}
