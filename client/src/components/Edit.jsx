import React from 'react';
import Nav from './Nav';
import Table from './Table';
import { useEffect, useContext,useState } from 'react';
import { DataContext } from '../context/DataContext';

const Edit = () => {

  const [result, setResult] = useState();
  const {getNotes, active, setActive} = useContext(DataContext);
  
  useEffect(() => {
    getNotes();
  },[]);

  function handleCaseChange(value){
   setResult(value)
   setActive('not')
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  function onSubmit(){
    setActive('active')
  }

  return (
    <div className='container py-3'>
      <Nav />
      <div  className='textContainer'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3 col-md-3">
            <label htmlFor="idCase" className="form-label">Caso</label>
            <input type="number" min="1" pattern="^[0-9]+" className="form-control" placeholder="Ingrese el número de caso" required name='case' onChange = {(e)=> handleCaseChange(e.target.value)}/>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit" onClick= {(e)=> onSubmit()} >Consultar</button>
          </div>
        </form>

        {active ==='active' ? <Table result = {result} setActive={setActive}/>: null}

      </div>
    </div>
  );
}

export default Edit;
