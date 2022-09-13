import React,{useState} from 'react';
import DeleteRecipe from './DeleteRecipe';
import useFetch from './useFetch';
// import Review from './Review';
function Home(){

    
    const[data,setData] = useFetch("http://localhost:9292/recipes")
    const[search,setSearch] = useState("");
    
    function handleDelete(deletedRecipe) {
        const newRecipes = data.filter((recipe) => recipe.id !== deletedRecipe.id)
        setData(newRecipes)
      }
      
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
    
    .filter((recipe) =>{
        if (search === ""){
            return recipe;
        }
        else if(recipe.name.toLowerCase().includes(search.toLowerCase())){
            return recipe;
        }
    })
    
            .map((recipe) =>(
                <DeleteRecipe id={recipe.id} key={recipe.id} recipe={recipe} onDeleteRecipe={handleDelete}/>
            ))}
        
        </div>
}
        </>
    )
        
}
export default Home;