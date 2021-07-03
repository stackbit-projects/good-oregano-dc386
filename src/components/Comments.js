import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"
import {firestore} from "../firebase.js"

const CommentList = styled.div`
  article {
    margin-bottom: 20px;
  }
`

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        firestore.collection('comments').get().then(data => {
            const newComments = data.docs.filter(doc => doc.data().slug == slug).map(item=>{
                return {id: item.id, ...item.data()}
            });
            setComments(newComments);
        })
    });
  return (
    <div>
      <h2>Join the discussion</h2>
      <CommentForm slug={slug} />
      <CommentList>
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              const childComments = comments.filter(c => comment.id === c.pId)
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  childComments={childComments}
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