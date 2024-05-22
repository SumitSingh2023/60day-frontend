import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  
  
  async function fetchAndUpdateData() {
    setLoading(true)
    try {
      {
        let res=await axios({
          method:"get",
          url:`https://dummyjson.com/posts`
        })
        setPosts(res?.data?.posts)
        console.log(res.data.posts)
        setLoading(false)
      }
    } catch (error) {
      {
        setError(true)
        setLoading(false)
      }
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      {posts.map((ele)=>(
        <div key={ele.id}>
          <h2>{ele.title}</h2>
          <h4>{ele.body}</h4>
          <h5>{ele.reaction}</h5>
          <p>Tags : {`${ele.tags}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
