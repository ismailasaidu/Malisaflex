import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin/Admin";
import Waitlist from "./pages/Admin/Waitlist";
import { useRef } from "react";


function App() {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div >
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/waitlist" element={<Waitlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
