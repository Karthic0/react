import {useState} from 'react'

function ColorPicker(){
    const [col,setcol] = useState()
    const changecol = (e) => {setcol(e.target.value)}
    return (
    <div className="container">
        <h1>Color Picker:</h1>
        <div>
        <p className="colorbox" style = {{backgroundColor:col}}>&#128526;</p>
        </div>
        <label>Select color:</label>
        <input type="color" onChange = {changecol}></input>
    </div>
    )
}
export default ColorPicker;