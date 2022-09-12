import React ,{useState} from 'react';
import useFetch from './useFetch';
import Review from './Review';
function Home(){

    const[search,setSearch] = useState("");
    const[data] = useFetch("http://localhost:9292/recipes")
    const[toggle,setToggle]= useState(true)
    const[review,setReview] = useState(true)
      
    return (
        <>
        <h1 className="heading"> Make Food! </h1>
            <p className="para"> You know you can easily make food </p>
            <div className="input-group col-xs-4 search">
            <input
            type="text"
            placeholder="Search recipe"
            className="form-control"
            value={search}
            onChange={(e)=>setSearch(e.target.value) }
        
                
                
            />
            <button className ="btn btn-primary" > search </button>

     
      
            </div>
            {data 

         
         
&& <div className='row '>
    
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
        
       
        
        <div className="col-md-4 mr-3 " key={item.id}>
         <div className="item"> 
         <div className="image">  
        <img src={item.image_url}/> 
        <span className="close-btn">
            <i className="fas fa-window-close"/>
        </span>
        </div>
        <div>
        <h3 className="header1"> {item.name} </h3>
        
        <h4 className="header2">{item.category}</h4>
        </div>
        <div>
        <h5 className="header3"> instruction 
        <span key={item.id}  onClick={() => setToggle(!toggle)}>
            <i className="fas fa-caret-square-down" />
        </span>
            </h5>
            {toggle &&  (<p className="para1"> {item.instructions}</p>)}
            <button className="btn btn-primary button" onClick={() => setReview(!review)} > Review</button>
            {/* {review &&  (<Review/>)} */}
      </div>
     
      </div>
       
        
     

 </div>

))}



</div>
}
        </>
    )
}
export default Home;