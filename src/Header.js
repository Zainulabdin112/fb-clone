import React from 'react'
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/FlagRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar , IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className="header">

         <div className="header_left">
         <img 
         src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="facebook"></img>
        
        <div className="header_input">
            <SearchIcon/>
            <input type="text" placeholder="Search Facebook"></input>
        </div>
        </div>

          <div className="header_middle"> 
         <div className="header_option
           header_option--active ">
             <HomeIcon fontSize="large"></HomeIcon>
            </div>
            <div className="header_option">
              <FlagIcon fontSize="large"></FlagIcon>  

              </div>
        
              <div className="header_option">
              <SubscriptionsRoundedIcon fontSize="large"></SubscriptionsRoundedIcon>  

              </div>
              <div className="header_option">
              <StorefrontRoundedIcon fontSize="large"></StorefrontRoundedIcon>  

              </div>
        
              <div className="header_option">
              <SupervisedUserCircleRoundedIcon fontSize="large"></SupervisedUserCircleRoundedIcon>  

              </div>

         </div>

          <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                    <h4>Ahmad Basit</h4>
                    
             </div>     
             <IconButton>
                 <AddIcon/>
             </IconButton>
           
             <IconButton>
                 <ForumIcon/>
             </IconButton>
           
             <IconButton>
                 <NotificationsActiveIcon/>
             </IconButton>
           
             <IconButton>
                 <ExpandMoreIcon/>
             </IconButton>
           

           
           </div>     
        </div>
    )
}

export default Header
