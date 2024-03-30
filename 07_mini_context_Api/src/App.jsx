import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
// import './App.css';
import './index.css';

function App() {
  

  return (
    <UserContextProvider>
      <h1>Mini Context API</h1>
      <Login  />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
