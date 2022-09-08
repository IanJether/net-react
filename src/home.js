
import BlogList from "./blocklist";
import useFetch from "./useFetch";
import React from 'react';

const Home = () => {

  const { Data: blogs, isPending , error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="Home">
          {error && <div>{error}</div>}
          {isPending && <div> Loading... </div> }
          { blogs && <BlogList blogs={blogs} title='All Blogs' /> }
        </div>
        );
}
 
export default Home;