import React from 'react'
import faker from 'faker'

const CommonDetail = (props) => {
    return(
    <div>
        <div className="comment">
              <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
              </a>
        </div>
        <div className="content">
           <a href="/" className="author">
               {props.author}
              </a>
        </div>
        <div className="metadata">
             <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
    </div>   
    )
}

export default CommonDetail;