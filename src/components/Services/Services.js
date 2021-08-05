import React from 'react';
import { useState } from 'react';
import ServicesPost from './ServicesPost';

const Services = () => {
    const [services] = useState([
        {
            key: "1",
        icon: "fas fa-shopping-cart fa-stack-1x fa-inverse",
        title: "E-Commerce",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },
        {
            key: "2",
        icon: "fas fa-laptop fa-stack-1x fa-inverse",
        title: "Responsive Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },
        {
            key: "3",
        icon: "fas fa-lock fa-stack-1x fa-inverse",
        title: "Web Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },

    ])
    return (
        <>
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    {services.map(service => (
                        <ServicesPost key={service.key} service={service} />
                    ))}
                </div>
            </div>
            </section>
        </>
        )
    }
    

export default Services
