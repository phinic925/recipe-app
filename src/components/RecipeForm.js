import React from "react";

function RecipeForm(){
    // const[name,setName] = useState("");
    // const[image,setImage_url] = useState("");
    // const[description,setDescription] = useState("");
    // const[category,setCategory] = useState("");
  
//     function handleSubmit(e){
//       e.preventDefault();
//       const itemData = {
//         name: name,
//         image_url: image,
//         description: description,
//         category: category,
  
//       };
//       fetch("http://localhost:3000/products",{
//         method: "POST",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify(itemData),
//       })
//       .then(res=> res.json())
//     .then(data=>{
//       console.log(data)
//     })
// }
//    function handleImage(e){
//        setImage_url((e.target.value))
//    }
    return(
        <form className="form-horizontal" >
           <div className="form-group">
            <input type="text" placeholder="Enter Name" required />
            </div> <br/>
            
            <div className="form-group">
            <input type="text" placeholder="Enter category" required /> </div>
            <br/>
            <div className="form-group">

            <input type="text" placeholder="Enter instructions" required /> </div>
            <br/>
            <div className="form-group">
            <div className="form-group">
            <input type="url" placeholder="Enter Image-url" className = "image" required /></div>
            <br/>
             
            <input type="submit" value="Add recipe" className="btn btn-primary" />
            </div>
        </form>
        

        
    )
}
export default RecipeForm;