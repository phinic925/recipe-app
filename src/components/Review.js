import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
function Review(){
    const[data] = useFetch("http://localhost:9292/reviews")
   const reviews = data.map(review =>{
       <div>
           <p> {review.description} </p>
       </div>

       
   }) 
 return(
        <>
       {reviews}
       <div>
           <input type="textarea" placeholder='Enter your review'/>
       </div>
        </>
    )

}
export default Review;