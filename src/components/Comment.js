import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CommentForm from "./CommentForm"
import moment from "moment"

const CommentBox = styled.article`
  border: 1px solid #ddd;
  margin: 35px 0 0 ${props => (props.child ? "20px" : "0")};
  padding: 1px;

  .flex-container1 {
    display: flex;
    align-items: flex-start;

    .flex + .flex {
      margin-left: 10px;
    }
  }
  .comment-author {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 700;
    span {
      text-transform: none;
      font-weight: 400;
      font-style: italic;
    }
  }
`

const SingleComment = ({ comment }) => {
  // if (comment.length > 0){
  //   console.log("got array: ", comment)
  //     return comment.map(c =>{
  //       <div>
  //       <div className="flex-container">
  //         <div className="flex">
  //           <p className="comment-author">
  //             {c.name} <span>says</span>
  //           </p>
  //           {c.time && (<time>{moment(c.time.toDate()).calendar()}</time>)}
  //         </div>
  //       </div>
  //       <p>{c.content}</p>
  //     </div>
  //     })
  // }
  return (
    <div>
      <div className="flex-container">
        <div className="flex">
          <p className="comment-author">
            {comment.name} <span>says</span>
          </p>
          {comment.timestamp && (<time>{moment(new Date(comment.timestamp)).calendar()}</time>)}
        </div>
      </div>
      <p>{comment.content}</p>
    </div>
  )
}

const Comment = ({ comment, childComments, slug, reloadComments }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)
  return (
    <CommentBox>
      <SingleComment comment={comment} />
      {/* {childComments && childComments.sort((a,b)=>a.time-b.time).map((child, index) =>
        <CommentBox key={index} child className="comment-reply">
            <SingleComment comment={child} />
        </CommentBox>
      )}
    <div>
        {showReplyBox ? (
        <div>
            <button
            className="btn bare"
            onClick={() => setShowReplyBox(false)}
            >
            Cancel Reply
            </button>
            <CommentForm parentId={comment.id} slug={slug} reloadComments={reloadComments} />
        </div>
        ) : (
        <button className="btn bare" onClick={() => setShowReplyBox(true)}>
            Reply
        </button>
        )} */}
    {/* </div> */}
    </CommentBox>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
}

export default Comment