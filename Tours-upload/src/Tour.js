import React, { useState } from 'react';
import tours from './tourList';
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';

const Tour = () => {
    const [people, setPoeple] = useState(tours);

    const restore = () => {
        setPoeple(tours);
    }

    const removeTour = (id) => {
        let newPeople = people.filter((person)=> person.id !== id);
        setPoeple(newPeople);
        console.log(people);
    }

    return (
        <>
        <h1>our tours</h1>
        <hr className='' />
        {people.map((person) => {
            const {id, title, interest, writeUp, price, img} = person;

            return (
                <div key={id} className='box'>
                    <img src={img} alt={title.slice(0, 15).toLowerCase()} />
                    <div className='text-container'>
                        <div className='inner-heading-text'>
                            <h4>{title}</h4>
                            <p className='sideText'>${price}</p>
                        </div>
                    
                        <p className='mainText'>
                            <ReadMoreReact
                                text={writeUp}
                                min= {200}
                                ideal= {200}
                                max= {600}
                            />
                            
                        </p>
                        <button onClick={()=> removeTour(id)}>{interest}</button>
                    </div>
                    
                    
                </div>
                
            )
            
        })}
        
        <button onClick={restore} className='restore'>see all deleted</button>
    </>
    );
    
}

export default Tour