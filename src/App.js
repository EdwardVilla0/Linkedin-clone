import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import Feed from './components/Feed/Feed.component'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login.component';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) :
        (<div className="app__body">
          <Sidebar />
          <Feed />
        </div>)
      }

    </div>
  );
}

export default App;


