import React from 'react'
import PortfolioItem from './PortfolioItem';
import { useState } from 'react'


const PortfolioGrid = () => {
    const [items] = useState([
        {
            key: "1",
            href: "#portfolioModal1",
            imgSrc: "assets/img/portfolio/1.jpg",
            heading: "Threads",
            subheading: "Illustration",

        },
        {
            key: "2",
            href: "#portfolioModal2",
            imgSrc: "assets/img/portfolio/2.jpg",
            heading: "Explore",
            subheading: "Graphic Design",

        },
        {
            key: "3",
            href: "#portfolioModal3",
            imgSrc: "assets/img/portfolio/3.jpg",
            heading: "Finish",
            subheading: "Identity",

        },
        {
            key: "4",
            href: "#portfolioModal4",
            imgSrc: "assets/img/portfolio/4.jpg",
            heading: "Lines",
            subheading: "Branding",

        },
        {
            key: "5",
            href: "#portfolioModal5",
            imgSrc: "assets/img/portfolio/5.jpg",
            heading: "Southwest",
            subheading: "Website Design",

        },
        {
            key: "6",
            href: "#portfolioModal6",
            imgSrc: "assets/img/portfolio/6.jpg",
            heading: "Window",
            subheading: "Photography",

        },
    ])
    return (
        <>
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {items.map((item) => (
                        <PortfolioItem key={item.key} item={item}/>
                    ))}
                </div>
            </div>
            </section>
        </>
  );
};
       

export default PortfolioGrid
