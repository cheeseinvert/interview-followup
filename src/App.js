import react, {useState, useEffect} from 'react';
import './App.css';

import {DataTable} from "./DataTable";
import {fetch} from "./api";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  useEffect( () => {
    (async () => {
      setData(await fetch(apiEndpoint, index, getNumRows));
      if (index <= 0 ) {
        document.getElementById("prevButton").disabled = true;
      } else {
        document.getElementById("prevButton").disabled = false;
      }
      if (index >= totalRecordNum - getNumRows ) {
        document.getElementById("nextButton").disabled = true;
      } else {
        document.getElementById("nextButton").disabled = false;
      }
    })();
  }, [index])

  const apiEndpoint = "https://us-central1-infinitus-interviews.cloudfunctions.net/react-pagination/entries";
  const getNumRows = 20;
  const totalRecordNum = 100;

  async function getPrevData() {
    if (index >= getNumRows) {
      setIndex(index - getNumRows);
    }
  }

  async function getNextData() {
    setIndex(index + getNumRows);
  }

  if (!data) {
    return <>loading...</>
  } else {
    return (
        <div className="App">
          <h1>Data Table</h1>
          <DataTable startingRowNum={index} data={data}/>
          <span><button id="prevButton" onClick={getPrevData}>Prev</button><button id="nextButton" onClick={getNextData}>Next</button></span>
        </div>
    );
  }
}

export default App;
