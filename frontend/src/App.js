import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');



function App() {
  return (
    <div>
      <h1>Social Network</h1>
      </div>
  );
}

export default App;
