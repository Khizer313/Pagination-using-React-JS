import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayPostMax, setDisplayPostMax] = useState(5);
  const [displayPostMin, setDisplayPostMin] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true when data fetching starts
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(response.data);
      setLoading(false); // Set loading state to false after data fetching is complete
    };

    fetchData();
  }, []);

  const delayLoadMore = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      if (displayPostMax < posts.length) {
        setDisplayPostMax(displayPostMax + 5);
        setDisplayPostMin(displayPostMin + 5);
      }
      setLoading(false); // Set loading state to false after 4 seconds
    }, 200);
  };

  const delayLoadLess = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      if (displayPostMin >= 5) {
        setDisplayPostMax(displayPostMax - 5);
        setDisplayPostMin(displayPostMin - 5);
      }
      setLoading(false); // Set loading state to false after 4 seconds
    }, 200);
  };

  return (
    <>
      {loading ? ( // Conditionally render loading animation
        <div className="loading-animation">
          <div className="loading-circle"></div>
          Loading...
        </div>
      ) : (
        <>
          <div className="post-container">
            {posts.slice(displayPostMin, displayPostMax).map((post, index) => (
              <div key={index} className="post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))}
          </div>

          <div className="pagination-buttons">
            <button className="load-button" onClick={delayLoadMore} disabled={displayPostMax >= 100}>
              Next 5+ Posts
            </button>
            <button className="load-button" onClick={delayLoadLess} disabled={displayPostMin <= 0}>
              Previous -5 Posts
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
