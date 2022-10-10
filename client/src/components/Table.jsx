import React from 'react';
import { useEffect, useContext,useState } from 'react';
import { DataContext } from '../context/DataContext';
import Modal from './Modal';

const Table = (result) => {

  const {getNotes, notes, setNotes} = useContext(DataContext);
  const [data, setData] = useState({
    case:'',
    note:'',
    id:''
  });

  useEffect(() => {
    getNotes();
  },[]);

  function onSubmit(idcase, note, id){
    setData({
      case: idcase,
      note,
      id
    })
  }

  return (
    <div>
      <div className="list-group my-3">
        {notes.case!=='undefined' ? notes.case.map((e)=>{
          if(result.result == e.idCase){
            return(
              <div key={e.id}>
                <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#Nota" data-bs-whatever="@mdo" name={e.idCase} value={e.note} id = {e.id} onClick= {(e)=> onSubmit(e.target.name, e.target.value, e.target.id)}>{e.note}</button>
              </div>
            )
          }
        }):null}
        <Modal data={data}/>
      </div>
    </div>
  );
}

export default Table;




