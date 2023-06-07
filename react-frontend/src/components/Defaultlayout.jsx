import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Defaultlayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex">
            <aside className="h-screen max-w-md bg-violet-600 flex-1">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="bg-slate-200 flex-1">
                <div className="bg-white flex">
                    <header>
                        <div>Header</div>
                        <div>{user.name}</div>
                    </header>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Defaultlayout;
