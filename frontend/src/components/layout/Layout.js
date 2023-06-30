import Navbar from "./Navbar";
import {useLocation} from "react-router-dom";

export default function Layout(props) {
    const location = useLocation();

    return (
        <div>
            <main>
                {location.pathname !== '/' && <Navbar />}
                {props.children}
            </main>
        </div>
    )
}