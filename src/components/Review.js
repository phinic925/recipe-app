import React,{useState,useEffect} from 'react';

function Review(){
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(res=> res.json())
        .then(data=> setReview(data))

    })
   
 return(
        <>
        <div>
            
            {review.map((item) => (
                <ul>
                <p className="reviews"> {item.description} </p>
                </ul>
          ))}
        </div>
        

      
      
        </>
    )

}
export default Review;