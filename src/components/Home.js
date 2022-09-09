import React ,{useState} from 'react';
import useFetch from './useFetch';
function Home(){

    const[search,setSearch] = useState("");
    const[data] = useFetch("http://localhost:9292/recipes")
    