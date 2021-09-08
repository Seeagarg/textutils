import React, {useState} from 'react'
import './form.css'




export default function Form(props) {

  const[text,setText] = useState("Enter the text here");


  const handleOnClick=()=>{
    console.log("uppercase is clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleUpClick=()=>{
    console.log("lowercase is clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange =(event)=>{
        console.log("changed")
        setText(event.target.value)
  }

  const handleClearClick =()=>{
    
    setText(" ");
}

// const handleCopy=()=>{
//   console.log("I am copy");
//   var text = document.getElementById("mybox");
//   text.select();
//   navigator.clipboard.writeText(text.value);


// }

// const handleCopy=()=>{
//   console.log("copied")
//    var text = document.getElementById("myBox");
//   text.select();
//   text.setSelectionRange(0,9999);
//   navigator.clipboard.writeText(text.value);
//   // var text = {text};
//   // navigator.clipboard.writeText(text.value);

// }

const handleExtraSpaces=()=>{
let newText = text.split(/[ ]+/);
setText(newText.join(" "))
// setText(str.trim());
}

 
  return (
    <>
    <div>

       <div className="my-3">
           <h1>{props.heading} </h1>
          {/* <label for="my text" className="form-label">enter text here</label> */}
          <textarea className="form-control" value = {text} onChange={handleOnChange} id="my box" rows="10"></textarea>
          <button className="btn-btn-primary" onClick ={handleOnClick}>convert to uppercase</button>
          <button className="btn-btn-primary" onClick ={handleUpClick}>convert to lowrcase</button>
          <button className="btn-btn-primary" onClick ={handleClearClick}>clear text</button>
           {/* <button className="btn-btn-primary" onClick ={handleCopy}>copy text</button> */}
          <button className="btn-btn-primary" onClick ={handleExtraSpaces}>Remove Extra Spaces</button> 
          
       </div>
      
    </div>

    
   <div className="container">
     <h1>Your Summary text</h1>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008* text.split(" ").length } minutes to read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>
   </div>
   
    </>
  )
}

