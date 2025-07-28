import React, { useState } from 'react'
import Success from './Success'
import Fail from './Fail'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState(0)
    
  const handleSubmit = (event) => {
    event.preventDefault()
    if (username === 'Ankit' && password === '123') {
      setLoginStatus(1)
      //we cant directly return the components from here (inside another funciton). only the Login() has the capability to return any component
    } else {
      setLoginStatus(2)
    }
  }

  if (loginStatus === 1) {   // so written here outside another func, inside Login() 
    return (
      <Success/>
    )
  }
  if (loginStatus === 2) {
    return (
      <Fail/>
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input type='text' id='username' onChange={(e) => setUsername(e.target.value)} />
        
        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}/>
        
        <button>Login</button>

      </form>
    </div>
  )
}


/*
This react project is deployed at github: 
  - First created one repo in github for this react-proj
  - pushed this proj to github
  - Added these 3 lines in package.json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
    },
    "homepage": "https://akhileshit.github.io/login-react-demo/",
  - ran "npm i gh-pages --save-dev"
  - ran "npm run deploy"
  - Done. Deployed.
*/ 
