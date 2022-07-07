import React, { useState } from 'react';
import img5 from './person5.JPG';

const Person = () => {
    const data = [
        {id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSCNzIfUOVIngoMP5XSa-wKU8aVQZH4fuag&usqp=CAU', name: 'Henderson Noville', age: 29},
        {id: 2, img: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80', name: 'Linda Cill', age: 25},
        {id: 3, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80', name: 'Inshot Boss', age: 31},
        {id: 4, img: img5, name: 'Wizzy Baby', age: 22},
        {id: 5, img: 'https://miro.medium.com/max/1400/1*y_uyQN1xEjppGVWJJkibMQ.jpeg', name: 'Lizzy Fliitch', age: 26},
        {id: 6, img: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80', name: 'Boss Paula', age: 24}
    ]
    const [people, setPeople] = useState(data);

    let amount = people.length;

    let birthdayText = 'birthdays today';

    if (amount === 1) {
        birthdayText = 'birthday today';
    } else if (amount === 0) {
        birthdayText = 'birthday today';
        amount = 'No';
    }
    
    let [ text, setText ] = useState('Passed😞');

    const changeText = (id) => {
        let thisPeople = people.filter((person) => person.id === id)
        console.log(thisPeople);
    }

    // I tried to implement a functionality that lets me change the text of {text} on mouse-Over, but coudn't, with my level of knowledge.
    // BTW I had just learned useState. Lol... 
    // Feel free to contribute to this project.

    const returnText = () => {
        setText('Passed😞')
    }

    const remove = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    const clearAll = () => {
        setPeople([]);
    }

    const undoClearAll = () => {
        setPeople(data);
    }

    return (
        <> 
            <h1>Birthday Reminder</h1>
            <h3>{amount} {birthdayText}</h3>
            {people.map((person) => {
                const { id, name, img, age } = person;

                return (
                 <div key={id} className='total'>
                    <img src={img} alt='' />
                        <div className='about'>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                        <button type='button' className='btn' onMouseOver={() => changeText(id)} onMouseLeave={returnText} onClick={() => remove(id)} title='remove'>
                            {text}
                        </button>
                 </div>
                )
            })}
            <div className='grpBtn'>
                <button onClick={clearAll} className='clearAll'>Clear All</button>
                <button onClick={undoClearAll} className='undoClearAll'>Restore</button>
            </div>  
            
        </>
    )
}

export default Person