import AddCampus from "../../components/campuses/AddCampus";
import {useEffect} from "react";

function AddCampusPage() {
    useEffect(() => {
        document.title = "Add Campus"
    })

    return (
        <div>
            <AddCampus />
        </div>
    )
}

export default AddCampusPage;