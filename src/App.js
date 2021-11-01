import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser); //give me the user back
  const dispatch = useDispatch()
  {/*To check if user is signed in and also keep track of the latest signed in user, if so then directly go to app even on refresh*/ }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        //Logged out
        dispatch(logout());
      }
    })
    return unsubscribe; //when it cleans up run the subscribe function
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile"> {/*Profile Path */}
              <ProfileScreen />
            </Route>
            {/* Routes have paths/links to different pages, its efficient and faster */}
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div >

  );
}

export default App;
