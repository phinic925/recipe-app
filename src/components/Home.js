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
            {data 

         
         
&& <div>
    
    {data
    
    .filter((item) =>{
        if (search === ""){
            return item;
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){
            return item;
        }
    })
    
    .map(item=>(

        <div className="product" key={item.id}>
            
        <img src={item.image_url}/> 
        
        <h3 className="header1"> {item.name} </h3>
        <h4 className="header2">{item.category}</h4>
        <p className="header3"> {item.instructions} </p>
        {/* <button className="btn btn-primary button" onClick={handleClick(item.id)}> 
        {order[item.id] ? ' Remove Order': 'Order'}
        
        </button> */}

 </div>


))}



</div>
}
        </>
    )
}
export default Home;