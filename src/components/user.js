export default function User(props) {
    let {id, name, age,isMarried,button}=props

    return (
        <div>
<h2>id {id} - {name} - {age} - {isMarried}</h2>
            {button}

        </div>

    );
}
