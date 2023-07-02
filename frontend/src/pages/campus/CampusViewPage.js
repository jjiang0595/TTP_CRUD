import CampusView from "../../components/campuses/CampusView";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const CampusViewPage = () => {
    const {campusId} = useParams();

    return (
        <div>
            <CampusView campusId={campusId} />
        </div>
    );
}

export default CampusViewPage;