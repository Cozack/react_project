export default function User(props) {
    let {name,age,isMarried,id,button} = props
    return (
        <div>
<h2>id: {id} - {name} - {age} - {isMarried.toString()}</h2>
            {button}
        </div>

    );
}

