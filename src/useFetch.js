import { useState, useEffect } from "react";


const useFetch = (url) => {
    
  const [Data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {

      const abortConst = new AbortController();

        
         fetch(url, { signal: abortConst.signal })
         .then(res => {
           if(!res.ok){
             throw Error ('Could not fetch data')
           }
           return res.json();
         })
         .then(data => {
           console.log(data);
           setData(data);
           setIsPending(false);
           setError(null);
         })
           .catch(err =>{
             setError(err.message);
             setIsPending(false);
           })
       
        
        return () => abortConst.abort();

       },[url]);

       return { Data , isPending, error}
}

export default useFetch;
 
