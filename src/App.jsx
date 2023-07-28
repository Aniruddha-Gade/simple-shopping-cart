import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className=" w-screen h-screen overflow-x-hidden pb-7">
      <div className="bg-slate-900 fixed top-0 z-[100] left-0  right-0 ">
        <Navbar />
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
};

export default App;
