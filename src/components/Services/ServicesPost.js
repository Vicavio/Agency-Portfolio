import React from 'react'

const ServicesPost = ({service}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
            <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={service.icon}></i>
            </span>
            <h4 className="my-3">{service.title}</h4>
            <p className="text-muted">{service.text}</p>
        </div>
        </>
    )
}

export default ServicesPost
