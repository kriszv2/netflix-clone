import { Search } from "@mui/icons-material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";
import "./navbar.scss"

const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }


    return(
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>

                </div>
                <div className="right">
                    <Search className="icon"/>
                    <NotificationsIcon className="icon"/>
                    <img src="" alt="" className="" />
                    <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar