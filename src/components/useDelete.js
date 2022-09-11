import {useEffect,useState} from 'react';

function useDelete(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(url,{
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data=> setData(data))

    },[url])
    return[data] 

}
export default useDelete;