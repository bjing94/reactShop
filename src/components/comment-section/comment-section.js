import React from 'react';

import './comment-section.css';

const Comment=(props)=>{
    // const {text,author,likes,time}=props;

    return(
        <div className="comment-container">
            <div className="comment-icon"></div>
            <div className="comment-content">
            <div className="comment-time">19.03.21 at 19:15</div> 
            <div className="comment-author">Michael</div>
            <div className="comment-text">Well this game is shit. 0/10. Would refund.</div>
            <div className="comment-like">
                <div className="comment-like-heart"></div>
                <div className="comment-like-value">5</div>
            </div>
        </div>
        </div>
    )
}
const CommentSection=(props)=>{
    // const {comments}=props;
    const comments=[1,2,3,4,5,6];
    const elements=comments.map((comment,idx)=>{
       return( <Comment
        // text={comment.text}
        // author={comment.author}
        // likes={comment.likes}
        // time={comment.time}
        key={"comment "+idx}
        />)
    })
    return(
        <div className="comment-section-container">
            {elements}
        </div>
    )
}
export default CommentSection;