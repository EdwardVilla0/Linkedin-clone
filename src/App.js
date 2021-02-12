import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import Widgets from './components/Widgets/Widgets.component';
import Feed from './components/Feed/Feed.component'
import { logout, selectUser, login } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login/Login.component';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })


  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) :
        (<div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>)
      }

    </div>
  );
}

export default App;


