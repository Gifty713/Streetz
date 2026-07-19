import AdminDashBoardCards from "../Component/AdminDashBoardCards";
import NavAdmin from "../Component/NavAdmin";
const AdminHome =()=>{
    return(
        <div className="admin-shell">
            <NavAdmin/>
            <main className="admin-dashboard">
                <AdminDashBoardCards/>
            </main>
        </div>
    )
}
export default AdminHome;
