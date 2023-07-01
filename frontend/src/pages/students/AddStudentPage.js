import AddStudent from "../../components/students/AddStudent";
import {useEffect} from "react";


function AddStudentPage() {
    useEffect(() => {
        document.title = "Add Student"
    })

    return (
        <div>
            <AddStudent />
        </div>
    )
}

export default AddStudentPage;