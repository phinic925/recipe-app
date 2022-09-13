import React ,{useState} from 'react';
import DeleteRecipe from './DeleteRecipe';
import useFetch from './useFetch';
// import Review from './Review';
function Home(){

    
    const[data] = useFetch("http://localhost:9292/recipes")
    
    function handleDelete(deletedRecipe) {
        const newRecipes = data.filter((recipe) => recipe.id !== deletedRecipe.id)
        setData(newRecipes)
      }
      
    return (
        <>
        <div className="row">
            {data.map((recipe) =>(
                <DeleteRecipe id={recipe.id} key={recipe.id} recipe={recipe} onDeleteRecipe={handleDelete}/>
            ))}
        
        </div>
        </>
    )
        
}
export default Home;