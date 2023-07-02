import {useEffect} from "react";
import EditCampus from "../../components/campuses/EditCampus";
import {useParams} from "react-router-dom";

function EditCampusPage() {
    const {campusId} = useParams();

    useEffect(() => {
        document.title = "Edit Campus"
    })

    return (
        <div>
            <EditCampus campusId={campusId}/>
        </div>
    )
}

export default EditCampusPage;