import { paragraphs } from './paragraph';
import React, { useState } from 'react';
// var randomParagraph = require('random-paragraph');

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState(0);

  const generate = (e) => {
     e.preventDefault();
     if(input > 20){input = 20};
    let amount = parseFloat(input);
    setText(paragraphs.slice(0,amount));
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <>
      <div className='box'>
        <h1 className='main-heading'>tired of boring lorem ipsum?</h1>
        <form className='form' onSubmit={generate}>
          <label htmlFor='paragraph' className='label'>Paragraphs:</label>
          <input type='number' min='1' id='paragraph' name='paragraph' className='paragraph' onChange={handleChange} value={input} />
          <button type='submit' className='btn' name='genarate'>generate</button>
        </form>
        <article className='text'>
          {text.map((item)=>{
            const {id,text} = item;
            return <p key={id}>{text}</p>
          })}
        </article>
      </div>
    </>
  )
}

export default App