
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Conponents/Login'
import Profile from './Conponents/Profile'

function App() {
 

  return (
    <UserContextProvider v>
      <h1>Context management </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
