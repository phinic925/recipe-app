import React,{useState,useEffect} from 'react';

function Review(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch("`http://localhost:9292/reviews")
        .then(res=> res.json())
        .then(data=> setData(data))

    })
   const reviews = data.map(review =>{
       return(
       <div key={review.id}>
           <p> {review.description} </p>
       </div>

       )   
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