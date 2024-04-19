import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Header from "./Component/Header/Header";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </div>
    );
}

export default App;
