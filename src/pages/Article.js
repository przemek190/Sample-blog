import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/App.css'

export default function Article() {
  const [isMobile, setIsMobile] = useState({ mobile: false, innerWidth: 0 })
  const [comments, setComments] = useState([])
  let history = useHistory()
  const { userId, id, title, body } = history.location.state

  useEffect(() => {
    async function getComments() {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(comments => setComments(comments))
    }
    getComments();
  }, [id])

  useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900 
          ? setIsMobile({ mobile: true, innerWidth: window.innerWidth })
          : setIsMobile({ mobile: false, innerWidth: window.innerWidth })
      };
  
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }
    }, [])

  return(
      <div className="container">
          <p>{ title }</p>
          <p>{ body }</p>
          {comments.map(data => {
            const { body, email, id, name } = data;
            return(
              <div>
                <p>{id}</p>
                <p>{email}</p>
                <p>{name}</p>
                <p>{body}</p>
              </div>
            )
          })}
      </div>
  )
}