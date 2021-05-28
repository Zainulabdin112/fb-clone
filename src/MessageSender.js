import React ,{ useState } from 'react'
import {Avatar} from "@material-ui/core"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotolibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from  "@material-ui/icons/InsertEmoticon"
import './MessageSender.css'


function MessageSender() {
   const [input  ,setInput ]= useState("");
   const [imageUrl, setImageUrl]=useState("");
   const handleSubmit = (e) => {
        e.preventDefault();
    // some celver db stuff
    setInput("");
    setImageUrl("");
    };



    return (
        <div className="messageSender">
           <div className="messageSender_top">
            <Avatar/>
            <form>
               <input 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="messageSender_input" 
               placeholder= {`what is your mind?`}></input>

               <input
               value={imageUrl}
               onChange={(e)=>setImageUrl(e.target.value)}
               placeholder="image URL(optional)"></input>
              <button onClick ={handleSubmit} type="submit">Hidden Submit</button>
            
            </form>
           </div> 

           <div className="messageSender_bottom">
          <div className="messageSender_option">
        <VideocamIcon style= {{ color: 'red'}}/> 
        <h3>Live Vedio</h3>   
              </div>
              <div className="messageSender_option">
        <PhotolibraryIcon style= {{ color: 'green'}}/> 
        <h3>Photo/Vedio</h3>   
              </div>
                 
              <div className="messageSender_option">
        <InsertEmoticonIcon style= {{ color: 'orange'}}/> 
        <h3>Feeling/Activity</h3>   
              </div>
               
   </div>

    
            </div>
    )
}

export default MessageSender
