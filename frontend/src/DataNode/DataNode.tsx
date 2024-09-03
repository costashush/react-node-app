import React from 'react';
import { useState } from "react";
import axios from 'axios';
import './DataNode.css';
import Form from '../Form/Form';

type propsData = {
    title: string;
    ingredients: string;
    steps: string;
    id:string;
  };
function DataNode({title,ingredients,steps,id}:propsData) {
  const [showForm, setShowForm] = useState(false);
  
  function deleteNode(id:string){
    alert("Deleting node id         => "+ id );

    try{
        axios.delete(`http://localhost:8080/recipes/${id}`)
          .then(res => {  
            const data = res.data;
            console.log(data)
            // setData(data);
          //   console.log(stateData);
          })
      }catch{
          console.log("not geting data from server");
      }
    // console.log('delete node ' + id)
  }
  
  function editNode(id:string){
    console.log('edit node ' + id)
    setShowForm(true);

  }
  return (
    <li className="App">     
        <h3>
            {title}
        </h3>
        <p>{ingredients}</p>
        <p>{steps}</p>
        <button onClick={()=>editNode(id)}>edit</button>
        <button onClick={()=>deleteNode(id)}>delete</button>
        {/* {JSON.stringify(stateData)} */}
        {showForm && <Form title={title} ingredients={ingredients} steps={steps} id={id}/>}
    </li>
  );    
}

export default DataNode;
