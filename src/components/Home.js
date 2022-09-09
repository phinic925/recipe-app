import React ,{useState} from 'react';
import useFetch from './useFetch';
function Home(){

    const[search,setSearch] = useState("");
    const[data] = useFetch("http://localhost:9292/recipes")
    return (
        <>
        <h1 className="heading"> Make Food! </h1>
            <p className="para"> You know you can easily make food </p>
            <div className="input-group col-xs-4 search">
            <input
            type="text"
            placeholder="Search Product"
            className="form-control"
            value={search}
            onChange={(e)=>setSearch(e.target.value) }
        
                
                
            />
            <button className ="btn btn-primary" > search </button>

     
      
            </div>