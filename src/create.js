import React, { useState } from "react";
import { useHistory } from "react-router-dom";




const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Andy');
    const [ispending, SetIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
     e.preventDefault();
     const blog = {title, body, author};

     SetIsPending(true);

    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('New Blog Added');
        SetIsPending(false)
        history.push('/');
     
    })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}

                >
                    <option value="Andy">Andy</option>
                    <option value="Jether">Jether</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding Blog...</button>}
              
            </form>
        </div>
     );
}
 
export default Create;