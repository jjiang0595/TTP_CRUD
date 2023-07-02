import CampusView from "../../components/campuses/CampusView";
import {useParams} from "react-router-dom";
import StudentView from "../../components/students/StudentView";

const StudentViewPage = () => {
    const {id} = useParams();

    return (
        <div>
            <StudentView id={id} />
        </div>
    );
}

export default StudentViewPage;