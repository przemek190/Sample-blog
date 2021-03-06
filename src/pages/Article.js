import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FaComment, FaRegStar } from 'react-icons/fa'
import '../styles/Article.css'

export default function Article() {
  let history = useHistory()
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false)
  const { id, title, body } = history.location.state

  // in the future migrate fetch to other file and connet API with Redux (redux-thunk)

  useEffect(() => {
    async function getComments() {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(comments => setComments(comments))
    }
    getComments();
  }, [id])

  const toggleCommentsVisibility = () => {
    setShowComments(!showComments)
  }

  return(
      <div className="article_container">
        <span>
          <p className="article_title">{ title }</p>
          <p className="article_body">{ body }</p>
        </span>
        <label className="article_comment_button_container" style={{color: showComments && 'darkgray'}} onClick={toggleCommentsVisibility}>
          <FaComment />
          <p>Comments ({comments.length})</p>
        </label>
        {showComments && (
          <div className="article_comments_container">
            {comments.map((data, index) => {
              const { id, body, email, name } = data;
              return(
                <div key={id} className="article_comment_container">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className="article_comment_font article_comment_padding article_comment_counter">{index + 1}</p>
                    <FaRegStar className="article_comment_padding article_comment_favourite" size={30} />
                  </div>
                  <p className="article_comment_font article_comment_padding article_comment_name">{name}</p>
                  <p className="article_comment_font article_comment_padding article_comment_body">{body}</p>
                  <p className="article_comment_font article_comment_padding article_comment_email">{email}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
  )
}
