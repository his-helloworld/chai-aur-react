import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Chai aur Code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
