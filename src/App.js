import './styles/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <div className={'navbar'}>
                <div className='navbar__links'></div>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/posts' element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
