import React from 'react';
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
             <MessageSender/>           
              <Post
               profilePic="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              message="wow this works"
              timestamp="This is a timestamp"
              username="Raza"
              image="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              />
              
              <Post
               profilePic="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              message="wow this works"
              timestamp="This is a timestamp"
              username="Raza"
              image="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              />
              <Post
               profilePic="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              message="wow this works"
              timestamp="This is a timestamp"
              username="Raza"
              image="https://www.plannthat.com/wp-content/uploads/2017/07/Facebook-Post-12.jpg"
              />
             
             

        </div>
    )
}

export default Feed
