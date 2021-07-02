import React from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"

const CommentList = styled.div`
  article {
    margin-bottom: 20px;
  }
`

const Comments = ({ comments, slug }) => {
  return (
    <div>
      <h2>Join the discussion</h2>
      <CommentForm slug={slug} />
      <CommentList>
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              let child = []
              //let child
              if (comment.id) {
                // comments.forEach(element => {
                //   if (element.pId === comment.id){
                //     child.push(element);
                //   }
                // });
                child = comments.find(c => comment.id === c.pId)
                // console.log("original comment: ", comment)
                console.log("child: ", child)
                // console.log("All comments: ", comments)
              }
              return (
                <Comment
                  key={comment.id}
                  child={child}
                  comment={comment}
                  slug={slug}
                />
              )
            })}
      </CommentList>
    </div>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
}

export default Comments