import './App.css';
import {Route, Routes} from "react-router-dom"
// import Post from './components/Post';
// import Header from './components/Header';
// import Login from './components/Login';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from "./pages/LoignPage"
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './contexts/UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element = {<Layout/>}>
        {/* index route */}
        <Route index element= {
           <IndexPage/>    
          }/>
        {/* Login route */}
        <Route path='/login' element={<LoginPage/>}/>
        {/* Register route  */}
        <Route path='/register' element= {<RegisterPage/>}/>
        <Route path= '/createPost' element= {<CreatePost/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
