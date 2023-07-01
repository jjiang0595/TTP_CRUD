import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import Campuses from "./pages/campus/Campuses";
import Students from "./pages/students/Students";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/campuses" element={<Campuses />}></Route>
                    <Route path="/students" element={<Students />}></Route>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
