import { useParams } from "react-router-dom";
import SidebarNav from "../../components/sidebar.component";

function Dashboard() {
    const { userId } = useParams();
    return (
        <div>
            <SidebarNav/>
        </div>
    )

}
export default Dashboard;