import React, { useState } from 'react'
import './App.css';
import Notelist from './component/Notelist'
import axios from 'axios';

function App() {
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);

  const loadNote = () => {
    axios.get(process.env.REACT_APP_NOTESURL)
      .then(function (response) {
        console.log(response.data);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const buttonReset = (e) => {
    e.preventDefault();
    loadNote();
  }
  // useEffect(() => {
  //   // debugger;
  //   loadNote()}
  //   ,[]);

  const inputNew = (e) => {
    e.preventDefault();
    setNote(prev => (e.target.value));
  }

  const buttonNew = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_NOTESURL, { content: `${note}` })
      .then(function (response) {
        console.log(response);
        setNote(prev => (''));
      })
      .catch(function (error) {
        console.log(error);
      })
    // .then(
    //   loadNote()
    // );
  }
  return (
    <div className="App">
      <header>
        <h1>
          NOTES
          <button id='update' onClick={buttonReset}><img src='https://img.icons8.com/flat_round/344/recurring-appointment.png' alt='reset'></img></button>
        </h1>

      </header>
      <Notelist data={data} />
      <form onSubmit={buttonNew}>
        <input id='input' type='textarea' name='data' value={note} onChange={inputNew}></input>
        <button id='addnote' onClick={buttonNew}><img src='https://www.flaticon.com/svg/static/icons/svg/2879/2879593.svg' alt='add'></img></button>
      </form>
    </div>
  );
}

export default App;
