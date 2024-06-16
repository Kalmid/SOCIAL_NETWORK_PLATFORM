import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import io from 'socket.io-client';
import './App.css';

const socket = io(process.env.REACT_APP_API_URL);



function App() {
  
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());

    socket.on('new_post', (post) => {
      dispatch({ type: 'NEW_POST', payload: post });
    });

    return () => {
      socket.off('new_post');
    };
  }, [dispatch]);


  return (
    <div>
      <h1>Social Network</h1>
      <div>
        {posts.map((post) => {
          <div key={post._id}>
            <p>{post.content}</p>
            {post.media.map((url) =>(
              <img src={url} alt="Post media" key={url}/>
            ))}
          </div>
        })}
      </div>
      </div>
  );
};

export default App;
