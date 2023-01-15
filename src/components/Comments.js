import React, {useState} from "react";

function Comments({comments, showButton,}) {
// console.log(comments)
// const[commentUpVotes, setUpVotes] = useState(0)
// const [commentDownVotes, setDownVotes] = useState(0)

// function handleUpComments(){
//     setUpVotes(upVotes=> upVotes + 1)
// }

// function handleDownComments(){
//     setDownVotes(downVotes => downVotes +1)
// }


const displayComments = comments.map(comment=> 
    <div key={comment.id} >
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
        {/* <button name="upvotes" 
                onClick={handleUpComments}>
            {commentUpVotes} 👍</button>
        <button name="downVotes" onClick={handleDownComments}>{commentDownVotes} 👎</button> */}
    </div>)
  
    return (
        <div >
            <h2>{comments.length} Comments</h2>
            {showButton ? displayComments : "" }
        </div>
    )
}
export default Comments
//((id)=>{ comment.id === id ? handleUpComments : null} )
