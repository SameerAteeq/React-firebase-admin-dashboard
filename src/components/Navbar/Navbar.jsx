import { SearchOutlined, LanguageOutlined, ListOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, DarkMode, LightMode } from "@mui/icons-material";
import { Avatar } from '@mui/material'
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Navbar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type='text' placeholder="search...." />
                    <SearchOutlined className="searchIcon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
                        {darkMode ? <DarkMode className="icon" /> : <LightMode className="lightIcon icon" />}

                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <Avatar className="avatar" src="https://source.unsplash.com/WNoLnJo7tS8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar