import React from 'react';
import Nav from './Nav';
import {useContext,useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import map from "lodash/map";

const Download = () => {

  const {getNotes, notes} = useContext(DataContext);
  const [numberCase, setNumberCase] = useState('');

  useEffect(() => {
    getNotes();
  },[]);

  const [data, setData] = useState({
    case_id: '',
    notes:[]
  });

  function handleCaseChange(value){
    setNumberCase(value)
  }
  
  function handleSubmit(){
    var arrNotes = []
    if(notes.case!=='undefined'){
      map(notes.case,(item)=>{
        if(numberCase == item.idCase){
          arrNotes.push({
            id: item.id,
            note: item.note
          })
          setData({
            case_id: item.idCase,
            notes: arrNotes
          })
        }
      })
    }
    exportData()
  }
 
  function exportData() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className='container py-3'>
      <Nav />
      <div className='textContainer'>
        <h1 className="card-title text-center">Descargar archivo JSON</h1>
        <p className="card-text my-2">Para descargar un informe en formato JSON se debe ingresar el número del caso. Luego hay presionar el botón descargar informe.</p>

        <div className="d-grid gap-2 col-6 mx-auto">

          <div className="mt-3 col-md-12">
              <input type="number" min="1" pattern="^[0-9]+" className="form-control text-center" placeholder="Ingrese el número del caso que desee descargar" required name='case' onChange = {(e)=> handleCaseChange(e.target.value)}/>
          </div>
          {numberCase !== ''? <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Descargar informe</button> :
          <button disabled type="button" className="btn btn-primary">Descargar informe</button>
          }
        </div>   
      </div>
    </div>
  );
}

export default Download;
