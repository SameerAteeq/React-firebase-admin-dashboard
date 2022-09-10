import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, Notifications, PersonOutlineSharp, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Logo</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <Dashboard className="icon" />
                            <span>Dasboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineSharp className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products/new" style={{ textDecoration: "none" }}>
                        <li>
                            <Store className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCard className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <Notifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        < AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>

        </div>
    )
}

export default Sidebar;