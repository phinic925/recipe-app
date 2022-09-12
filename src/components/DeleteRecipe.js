

import React from 'react'

const DeleteRecipe = ({recipe, onDeleteRecipe }) => {
   
    function handleDeleteRecipe() {
    fetch(`https://books-app-backend.herokuapp.com/book/${recipe.id}`, {
    method:"DELETE",
    })
      .then(r => r.json())
      .then(() => {
      onDeleteRecipe(recipe)
      })
    }
    
  return (
    <div>
      
        <div className="flex content-center justify-center mt-5">
        <div className="span">
        <p>Title: {book.title}</p>
        <p>Publisher Name: {book.publisher}</p>
        <p>Price: Ksh{ book.price}</p>
        <button className='delete' onClick={handleDeleteRecipe} >Delete</button>
      </div>
      </div>
    </div>
  )
}

export default DeleteRecipe;