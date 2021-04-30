import logo from './logo.svg';
import './App.css';
import User from './components/users/user'
import {useState} from 'react';


const usersList = [
    {id: 9, name: 'vasya', age: 31, isMarried: false},
    {id: 2, name: 'petya', age: 30, isMarried: true},
    {id: 4, name: 'kolya', age: 29, isMarried: true},
    {id: 3, name: 'olya', age: 28, isMarried: false},
    {id: 8, name: 'max', age: 30, isMarried: true},
    {id: 6, name: 'anya', age: 31, isMarried: false},
    {id: 10, name: 'oleg', age: 28, isMarried: false},
    {id: 5, name: 'andrey', age: 29, isMarried: true},
    {id: 1, name: 'masha', age: 30, isMarried: true},
    {id: 7, name: 'olya', age: 31, isMarried: false},
    {id: 11, name: 'max', age: 31, isMarried: true}
];

function App() {

    let [users, setUsers] = useState(usersList);

    function removeUser(id) {

        const newUsers = users.filter((value) => value.id !== id);
        setUsers(newUsers)

    }

    return (
        <div>

            {
                users.map(value =>
                    <User
                        id={value.id}
                        name={value.name}
                        age={value.age}
                        isMarried={value.isMarried.toString()}
                        button={<button onClick={() => removeUser(value.id)}>Remove User</button>}
                    />
                )
            }

        </div>

    );
}

export default App;
