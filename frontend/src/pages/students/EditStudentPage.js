import {useEffect} from "react";
import {useParams} from "react-router-dom";
import EditStudent from "../../components/students/EditStudent";

function EditStudentPage() {
    const {id} = useParams();

    useEffect(() => {
        document.title = "Edit Student"
    })

    return (
        <div>
            <EditStudent id={id} />
        </div>
    )
}

export default EditStudentPage;