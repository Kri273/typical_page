import { Fragment, useEffect, useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import './App.css'
import Login from './components/Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if(JSON.parse(localStorage.getItem('isLoggedUser')) !== null) {
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged     
    } else {
      return false;
    }
  })

  console.log(loggedIn)

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(localStorage.getItem('isLoggedUser'))
    if(storedLoggedUserData !== null){
      if(storedLoggedUserData.isLogged === true){
        setLoggedIn(true)
      }
    }
  }, [])

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }))
  console.log("User logged in:", user);
  setLoggedIn(true)
  }

  return (
    <Fragment>
      <MainHeader />
      <main>
        <Login onLogin={loginHandler}/>
      </main>
    </Fragment>
  );
}

export default App
