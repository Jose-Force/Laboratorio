import React from 'react';
import axios from 'axios';
import Nav from './Nav';
import { useState } from 'react';

const Create = () => {

 const [notes, setNotes] = useState({
  idCase: '',
  note: ''
 });

 function handleCaseChange(value){
  setNotes({
    ...notes,
    idCase: value,
  })
 }

 function handleNoteChange(value){
  setNotes({
    ...notes,
    note: value,
  })
 }

 function handleSubmit(e){
  e.preventDefault();
  axios.post('http://localhost:3001/createNote', notes)
  e.target.reset()
  alert('Se ha creado la nota correctamente')
  }

  return (
    <div className='container py-3'>
      <Nav />
    <form className='textContainer' onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3 col-md-3">
        <label htmlFor="idCase" className="form-label">Caso</label>
        <input type="number" min="1" pattern="^[0-9]+" className="form-control" placeholder="Ingrese el número de caso" required name='case' onChange = {(e)=> handleCaseChange(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="note" className="form-label">Nota</label>
        <textarea className="form-control" rows="3" required name='note' onChange = {(e)=> handleNoteChange(e.target.value)} ></textarea>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">Crear nota</button>
      </div>
    </form>
    </div>
  );
}

export default Create;
