import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Blogs to read</h2>
      {posts.map((post) => (
        <div key={post._id} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">Author: {post.author.username}</p>
            <Link to={`/posts/${post._id}`} className="btn btn-primary">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
