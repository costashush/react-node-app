import React from 'react';
import { useState } from "react";
import axios from 'axios';
import './Form.css';

type propsData = {
    title?: string;
    ingredients?: string;
    steps?: string;
    id?:string;
  };
function Form({title,ingredients,steps,id}:propsData) {
   
    const [inputs, setInputs] = useState({title,ingredients,steps});
        // @ts-ignore: Unreachable code error
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
        // @ts-ignore: Unreachable code error
    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert(JSON.stringify(inputs));
      if(id){

          try{
              axios.put(`http://localhost:8080/recipes/${id}`,{inputs})
              .then(res => {  
                  const data = res.data;
                  console.log(data)
                  // setData(data);
                  //   console.log(stateData);
                })
            }catch{
                console.log("not geting data from server");
            }
      }else{
        try{
            axios.post(`http://localhost:8080/recipes`,{inputs})
            .then(res => {  
                const data = res.data;
                console.log(data)
                // setData(data);
                //   console.log(stateData);
              })
          }catch{
              console.log("not geting data from server");
          }
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter Title:
        <input 
          type="text" 
          name="title" 
              // @ts-ignore: Unreachable code error
          value={inputs.title || title} 
          onChange={handleChange}
        />
        </label>
        <label>Enter ingredients:
            
            <textarea 
              name="ingredients" 
                // @ts-ignore: Unreachable code error
              value={inputs.ingredients || ingredients} 
              onChange={handleChange} />
        </label>
        <label>Enter steps:
            
          <textarea 
            name="steps" 
                // @ts-ignore: Unreachable code error
            value={inputs.steps || steps} 
            onChange={handleChange} />
        </label>
          <input type="submit" value={id?"Save":"Add new"}/>
      </form>
    )
}

export default Form;
