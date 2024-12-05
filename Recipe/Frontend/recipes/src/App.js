import "./App.css";
import Home from './components/Home'
import {Routes ,Route} from 'react-router-dom';
import MyHeader from "./components/MyHeader";
import AddForm from "./components/AddForm";
import Updateform from "./components/Updateform";
// import MyHeader from "./components/MyHeader";
function App() {
  return( 
  <div>
    <MyHeader></MyHeader>
    {/* Hello world */}
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/AddForm" element={<AddForm></AddForm>}/>
    <Route path="/Updateform" element={<Updateform></Updateform>}/>

  </Routes>
  </div>
)}

export default App;
