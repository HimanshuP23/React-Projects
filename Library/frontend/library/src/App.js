import './App.css';
import Editform from './component/Editform';
import Home from './component/Home';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      {/* Hello */}

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Editform/:id" element={<Editform></Editform>}></Route>
    </Routes>
    </div>
  );
}

export default App;
