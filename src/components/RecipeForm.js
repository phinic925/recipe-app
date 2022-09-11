import React from "react";

function RecipeForm(){
    const[name,setName] = useState("");
    const[image,setImage_url] = useState("");
    const[instruction,setInstruction] = useState("");
    const[category,setCategory] = useState("");
  
    function handleSubmit(e){
      e.preventDefault();
      const itemData = {
        name: name,
        image_url: image,
        category: category,
        instructions: instruction
  
      };
      fetch("http://localhost:3000/recipes",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(itemData),
      })
      .then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
}
   function handleImage(e){
       setImage_url((e.target.value))
   }
    return(
        <form className="form-horizontal" onSubmit={handleSubmit} >
           <div className="form-group">
            <input type="text" placeholder="Enter Name" required value={name}
          onChange={(e) => setName(e.target.value)} />
            </div> <br/>
            
            <div className="form-group">
            <input type="text" placeholder="Enter category" required value={category}
          onChange={(e) => setCategory(e.target.value)}/> </div>
            <br/>
            <div className="form-group">

            <input type="text" placeholder="Enter instructions" required value={instruction}
          onChange={(e) => setInstruction(e.target.value)} /> </div>
            <br/>
            <div className="form-group">
            <div className="form-group">
            <input type="url" placeholder="Enter Image-url" className = "image" required value={image}
          onChange={handleImage}/></div>
            <br/>
             
            <input type="submit" value="Add recipe" className="btn btn-primary" />
            </div>
        </form>
        

        
    )
}
export default RecipeForm;