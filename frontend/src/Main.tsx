import React from 'react';
import { useState } from "react";
import axios from 'axios';
import './App.css';
import DataNode from './DataNode/DataNode';
import Form from './Form/Form';
function Main() {
    const [stateData, setData] = useState({});
    
    type dataNode = {
        title: string;
        ingredients: string;
        steps: string;
      };


  function List(){
    return(
        <>
        <h1>List component</h1>
        <ul>
            {
                Object.entries(stateData).map(obj => {
                    const key   = obj[0];
                    const value = obj[1] as dataNode; 
                    // console.log(key  , value);
                    return(
                        <DataNode key={key} id={key} title={value.title} ingredients={value.ingredients} steps={value.steps}/>
                        // <li>{data.title} {data.ingredients} </li>
                    )
                 })
                 
            }
              <li><Form title="" ingredients="" steps=""/></li>
        </ul>
        </>
       )
  } 
  function getData() {
    try{
      axios.get(`http://localhost:8080/recipes`)
        .then(res => {  
          const data = res.data;
          setData(data);
        //   console.log(stateData);
        })
    }catch{
        console.log("not geting data from server");
    }
  }
  
  return (
    <div className="App">     
        <button onClick={getData}>get test data from server</button>
        {
          Object.entries(stateData).length > 0 &&
          <List/>
        }
      
    </div>
  );    
}

export default Main;
