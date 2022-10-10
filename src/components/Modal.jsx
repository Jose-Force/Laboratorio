import React, {useContext,useState } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataContext';

const Modal = ({data}) => {
  const {setActive} = useContext(DataContext);

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
    alert('Se ha realizado la modificación con éxito')
    axios.put('http://localhost:3001/edit/'+ data.id, notes)
    setActive('not')
    }

  return (
    <div className="modal fade" id="Nota" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Nota</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="idCase" className="col-form-label">Caso:</label>
              <input type="number" min="1" pattern="^[0-9]+" className="form-control" id="recipient-name" placeholder={data.case} required name='case' onChange = {(e)=> handleCaseChange(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="col-form-label">Nota:</label>
              <textarea className="form-control" placeholder={data.note} required name='note' onChange = {(e)=> handleNoteChange(e.target.value)}></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          {notes.idCase !== '' && notes.note ? <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  onClick={(e) => handleSubmit(e)} >Guardar cambios</button>:
          <button type="button" className="btn btn-primary" disabled >Guardar cambios</button>}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Modal;
