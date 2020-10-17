import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const newColor = {
  color: '',
  code: {hex: ''},
  id: ''
}

const ColorList = ({ colors, updateColors, getColors }) => {

  const [adding, setAdding]  = useState(false)
  const [colorToAdd, setColorToAdd] = useState(newColor)
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const addColor = () => {
    setAdding(true);
  }

  const saveAdd = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .post(`http://localhost:5000/api/colors`, colorToAdd)
    .then(res => {
      getColors()})
    .catch(e => console.log(`THE COLORS, DUKE! THE COLORS! ${e}`))
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => getColors())
    .catch(e => console.log(`THE COLORS, DUKE! THE COLORS! ${e}`))
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => getColors)
    .catch(e=> `DENIED: ${e}`)
  };

  /*return (
    
    <div className="colors-wrap">
      <p>colors</p>
      <button onClick={() => addColor()}></button>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>

        <form onSubmit={saveAdd}>
          <legend>Add color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToAdd({ ...colorToAdd, color: e.target.value })
              }
              value={colorToAdd.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToAdd({
                  ...colorToAdd,
                  code: { hex: e.target.value }
                })
              }
              value={colorToAdd.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setAdding(false)}>cancel</button>
          </div>
        </form>
        </li>
      </ul>
  
   </div>
      
  )
} */
}
export default ColorList; 