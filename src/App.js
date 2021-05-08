import react, {useState, useEffect} from 'react';
import './App.css';

import {DataTable} from "./DataTable";
import {fetch} from "./api";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  useEffect( () => {
    (async () => {
      await getMoreData();
    })();
  }, [index])

  const apiEndpoint = "https://us-central1-infinitus-interviews.cloudfunctions.net/react-pagination/entries";
  const getNumRows = 20;

  async function getMoreData() {
    setData(await fetch(apiEndpoint, index, getNumRows));
  }

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
          <span><button onClick={getPrevData}>Prev</button><button onClick={getNextData}>Next</button></span>
        </div>
    );
  }
}

export default App;
