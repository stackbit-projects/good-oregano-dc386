import React, {useState, useEffect} from "react"
import styled from "styled-components"
import _ from 'lodash';
import PropTypes from "prop-types"
import firebase, {firestore} from "../firebase.js"

const CommentBox = styled.div`
  input,
  textarea {
    display: block;
    background-color: #fff;
    border: 2px solid #ddd;
    font-size: 16px;
    font-family: "Hind", sans-serif;
    font-weight: 400;
    padding: 10px 12px 8px;
    width: 100%;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum";
  }

  input[type="text"] {
    width: 50%;
  }

  label {
    display: block;
    margin-bottom: 2px;
  }
`

const CommentForm = ({ parentId, slug, reloadComments }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const handleCommentSubmission = async e => {
    e.preventDefault()
    const timeNow = Date.now();
    let comment = {
      name: name,
      content: content,
      pId: parentId || null,
      time: timeNow,
      slug: slug,     
    }
    setName("")
    setContent("")
    const jsonComment = JSON.stringify({name: name, content: content, timestamp: timeNow, pId: null})
    console.log(jsonComment)
    firestore.collection(`comments`).doc(slug).get().then(doc =>{
        if (doc.exists) {
          const existingDoc = firestore.collection(`comments`).doc(slug)
          existingDoc.update({
              comments: firebase.firestore.FieldValue.arrayUnion(jsonComment)
            })
        }
        else {
          firestore.collection(`comments`).doc(slug).set({
            comments: [jsonComment]
          })
        }
        reloadComments()
      })
    .catch(err => {
      console.error('error adding comment: ', err)
    })
  }

  return (
    <CommentBox>
      <form onSubmit={e => handleCommentSubmission(e)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            id="comment"
            onChange={e => setContent(e.target.value)}
            value={content}
            name="comment"
            required="required"
            cols="45"
            rows="8"
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </CommentBox>
  )
}

CommentForm.propTypes = {
  parentId: PropTypes.string,
  slug: PropTypes.string.isRequired
}

export default CommentForm