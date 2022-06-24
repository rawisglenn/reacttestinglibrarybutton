import './App.css';
import {useState} from 'react';

function App() {
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false); 
  const newBtnColor = btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  
  return (
    <div>
        <button style={{backgroundColor:disabled ? "gray":btnColor}} 
        onClick={() => setBtnColor(newBtnColor)}
        disabled={disabled}>
        Change to {replaceCamelWithSpaces(newBtnColor)}</button>
        <input type="checkbox" id="disable-button-checkbox" onChange={(e)=>setDisabled(e.target.checked)}/>
        <label for="disable-button-checkbox">Disable button</label>

    </div>
  );
}

export default App;

export function replaceCamelWithSpaces(colorName){
  let regex = /\B([A-Z])\B/g;
  return colorName.replace(regex," $1");
}