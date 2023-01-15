import React  from "react";


function Buttons(
            {upVotes, onUpVote, downVotes,onDownVote, showButton ,onHideShow}  
         ) {
   
    return (
        <>
        <div>
            <button name="upvotes" onClick={onUpVote}>{upVotes} 👍</button>
            <button name="downVotes" onClick={onDownVote}>{downVotes} 👎</button>
        </div>
        <p>
            <button onClick={onHideShow}>{showButton ? "Hide Comments" : "Show Comments"}</button>
        </p>
        </>
    )
}
export default Buttons