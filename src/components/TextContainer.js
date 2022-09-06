import React, { useState } from 'react'

export default function TextContainer(props) {
  const upperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const lowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const capitaLizer = () => {
    let str = text.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    setText(str.join(" "));

  }
  const clearText = () => {
    let newText = '';
    setText(newText);
  }
  let handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#010208':'white', color:props.mode==='dark'?'white':'black'}} id="mytext" rows="8"></textarea>
        <button className="btn btn-primary" onClick={upperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={lowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={capitaLizer}>Convert to Capitalize</button>
        <button className="btn btn-primary" id="clearbtn" onClick={clearText}>Clear Text</button>

      </div>
      <div className="containers my-4">
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
      </div>
    </>

  )
}
