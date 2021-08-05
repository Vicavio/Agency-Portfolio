import React from 'react'

const AboutPost = ({ post }) => {
    return (
        <>
            <li className={post.class}>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={post.imgSrc} alt="..." /></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{post.heading}</h4>
                    <h4 className="subheading">{post.subheading}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">{post.text}</p></div>
            </div>
        </li>
        </>
    )
}

export default AboutPost
