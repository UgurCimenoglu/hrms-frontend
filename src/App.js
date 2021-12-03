import "./App.css";
import Navi from "./layouts/Navi";
import Search from "./layouts/Search";
import Dashboard from "./layouts/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer transition={Slide}/>
      <Navi />
      <Search />
      <Dashboard />
    </div>
  );
}

export default App;
