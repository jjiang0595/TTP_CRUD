import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import Campuses from "./pages/campus/Campuses";
import Students from "./pages/students/Students";
import AddCampusPage from "./pages/campus/AddCampusPage";
import AddStudentPage from "./pages/students/AddStudentPage";
import CampusViewPage from "./pages/campus/CampusViewPage";
import EditCampusPage from "./pages/campus/EditCampusPage";
import StudentViewPage from "./pages/students/StudentViewPage";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/campuses" element={<Campuses />}></Route>
                    <Route path="/campuses/add" element={<AddCampusPage />}></Route>
                    <Route path="/campuses/:campusId/edit" element={<EditCampusPage />}></Route>
                    <Route path="/campuses/:campusId" element={<CampusViewPage />}></Route>
                    <Route path="/students" element={<Students />}></Route>
                    <Route path="/students/add" element={<AddStudentPage />}></Route>
                    <Route path="/students/:id" element={<StudentViewPage />}></Route>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
