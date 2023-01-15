import React , {useState} from "react";
import video from "../data/video.js";
import Video from "./Video.js"
import Comments from './Comments.js';
import Buttons from './Buttons.js';



function App() {
  const[upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showButton , setShowButton] = useState(false)

    function handleUpCount(){
        setUpVotes(upVotes=> upVotes + 1)
    }
    function handleDownCount(){
        setDownVotes(downVotes => downVotes +1)
    }
    function handleHideShow(){
      setShowButton(!showButton)
    }



  return (
    <div className="App">
      <Video video={video}/>

      <Buttons  
        upVotes={upVotes} 
        downVotes={downVotes}
        onUpVote={handleUpCount} 
        onDownVote={handleDownCount}
        showButton={showButton}
        onHideShow={handleHideShow}
      />

    <div style={{borderTop: "solid 2px darkgrey"}}>
      <Comments 
        comments={video.comments}  
        showButton={showButton}
        upVotes={upVotes} 
        downVotes={downVotes}
        onUpVote={handleUpCount} 
        onDownVote={handleDownCount}
      />
    </div>
      
      
    </div>
  );
}

export default App;
