import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlockDetails = () => {

    const { id } = useParams();
    const { Data: blog, error, isPending } = useFetch('jether-blogs.firebaseapp.com/'+ id);
    const history = useHistory();

    const handleClick = () => {
      fetch('jether-blogs.firebaseapp.com/' + blog.id,{
        method: 'DELETE'
      }).then( ()=> {
        history.push('/')
      })
    }

    return ( 
      <div className="blog-details">
         { isPending && <div> Loading... </div>}
         {error && <div> { error} </div>}
         {blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete</button>
          </article>
         )}
      </div> 
     );
}
 
export default BlockDetails;