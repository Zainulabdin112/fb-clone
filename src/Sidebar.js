import React from 'react';
import SidebarRow from "./SidebarRow"
import "./Sidebar.css"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' title= 'Ahmad Basit'/>
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title="Covid-19 Information Center"/>
            <SidebarRow Icon ={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon ={PeopleIcon} title="Friends"/>
            <SidebarRow Icon ={ChatIcon} title="Messenger"/>
            <SidebarRow Icon ={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon ={VideoLibraryIcon} title="Vedios"/>
            <SidebarRow Icon = {ExpandMoreIcon} title="Marketplace"/>           
            
            
                        




                    </div>
    );
}

export default Sidebar;
