import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import styled from "styled-components"
import {firestore} from "../firebase.js"

const CommentList = styled.div`
  article {
    margin-bottom: 1px;
  }
`

const Comments = ({ slug }) => {
    slug = slug.replace(/\//g,"\_" );
    const [comments, setComments] = useState([]);
    const reloadComments = () => {
        console.log("reload was called!");
        firestore.collection('comments').doc(slug).get().then(doc => {
            if (!doc.exists)
              return {}

            const newComments = doc.data().comments.map((item, index)=>{
                let singleComment = JSON.parse(item);
                console.log(singleComment)
                return {content: singleComment.content, name: singleComment.name, timestamp: singleComment.timestamp, key: index}
            });
            setComments(newComments);
        })
    }
    useEffect(() => {
        reloadComments();
    }, []);
  return (
    <div>
      <h2>Join the discussion</h2>
      <CommentForm slug={slug} reloadComments={reloadComments} />
      <CommentList>
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map((comment, index) => {
              //const childComments = comments.filter(c => comment.id === c.pId)
              return (
                <Comment
                  key={index}
                  comment={comment}
                  childComments={[]}
                  slug={slug}
                  reloadComments={reloadComments}
                />
              )
            })}
      </CommentList>
    </div>
  )
}

// Comments.propTypes = {
//   slug: PropTypes.string.isRequired,
//   comments: PropTypes.array.isRequired
// }

export default Comments