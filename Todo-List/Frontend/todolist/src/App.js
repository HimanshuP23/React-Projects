// import { Route } from "react-router-dom";
import EditForm from "./component/EditForm";
import "./App.css";
import Home from "./Home";
import AddForm from "./component/AddForm"
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/edit" element={<EditForm></EditForm>}></Route>
        <Route path="/add" element={<AddForm></AddForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
