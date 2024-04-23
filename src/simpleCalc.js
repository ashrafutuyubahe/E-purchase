import React, { useReducer } from "react";

 export default function Calculator() {
    const actions={
     add:'add',
     sub:'subtraction',
     mult:'mult',
     divi:'divi'
    }
    function reducer(numbers,actions){
        switch(actions.type){
            case 'add':
            return[
            {...numbers,
            result:''
            
            
            }
            ]
        }

    }
     const [numbers,dispatch]= useReducer(reducer,{firstnumber:0,secondnumber:0,result:0}) 
  return (
    <form className="p-3">
     <div className="m-2 ">
     <input placeholder="number" onClick={(e)=>{
       const numvalue=e.target.value;  
     }} />
     <button className="btn btn-primary m-1">result</button>    
      <button className="btn btn-success m-2">add</button>
      <button  className="btn btn-success m-2">subtract</button>
      <button  className="btn btn-success m-2">divide</button>
      <button  className="btn btn-success m-1">multiply</button>
      <input  />
     </div>
    </form>
  );
}
