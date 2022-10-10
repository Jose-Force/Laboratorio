import React, {createContext, useState} from 'react';
import axios from 'axios';

export const DataContext = createContext();

export function DataProvider(props){

  const [notes, setNotes] = useState([]);
  const [active, setActive] = useState('not');

  const getNotes = async () => {
    return await axios.get('http://localhost:3001/notes').then(async res => { 
        const data = await res.data;
        setNotes(data)
    });
  }

  return(
    <DataContext.Provider value={{
      notes,
      setNotes,
      getNotes,
      active,
      setActive
  }}>
      {props.children}
  </DataContext.Provider>
  )
}