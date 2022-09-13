

import React,{useState} from 'react'

const DeleteRecipe = ({onDeleteRecipe,recipe} ) => {
const[toggle,setToggle]= useState(true)
   
 function handleToggle() {
        setToggle(!toggle)
        
    }
    function handleDeleteRecipe() {
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
        method:"DELETE",
        })
          .then(r => r.json())
          .then((deletedRecipe) => onDeleteRecipe(deletedRecipe));
          
          
        }
    
  return (
    <>
          
        <div className="col-md-4 mr-3 " key={recipe.id}>
         <div className="item"> 
         <div className="image">  
        <img src={recipe.image_url}/> 
        <span className="close-btn" onClick={handleDeleteRecipe}>
            <i className="fas fa-window-close"/>
        </span>
        </div>
        <div>
        <h3 className="header1"> {recipe.name} </h3>
        
        <h4 className="header2">{recipe.category}</h4>
        </div>
        <div>
        <h5 className="header3"> instruction 
        <span key={recipe.id}  onClick={() =>{handleToggle(recipe.id)}}>
            <i className="fas fa-caret-square-down" />
        </span>
            </h5>
            {toggle &&  (<p className="para1"> {recipe.instructions}</p>)}
           
      </div>
      
     
      </div>
       
        
     

 </div>







        </>
    
  )
}


export default DeleteRecipe;