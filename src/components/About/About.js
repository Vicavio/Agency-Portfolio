import React from 'react'
import AboutPost from './AboutPost'
import { useState } from 'react'

const About = () => {
    const [posts] = useState([
        {
            key: "1",
            imgSrc: "assets/img/about/1.jpg",
            heading: "2009-2011",
            subheading: "Our Humble Beginnings",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",

        },
        {
            key: "2",
            class: "timeline-inverted",
            imgSrc: "assets/img/about/2.jpg",
            heading: "March 2011",
            subheading: "An Agency is Born",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            
        },
        {
            key: "3",
            imgSrc: "assets/img/about/3.jpg",
            heading: "December 2015",
            subheading: "Transition to Full Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            
        },
        {
            key: "4",
            class: "timeline-inverted",
            imgSrc: "assets/img/about/4.jpg",
            heading: "July 2020",
            subheading: "Phase Two Expansion",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            
        }
    ])
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    {posts.map(post => (
                        <AboutPost key={post.key} post={post} />
                    ))}              
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
