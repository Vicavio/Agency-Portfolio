import React from 'react'
import ModalItem from './ModalItem'
import { useState } from 'react'

const PortfolioModal = () => {
    const [modals] = useState([
        {
            key: "1",
            id: "portfolioModal1",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/1.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Threads",
            category: "Illustration",

        },
        {
            key: "2",
            id: "portfolioModal2",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/2.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Explore",
            category: "Graphic Design",

        },
        {
            key: "3",
            id: "portfolioModal3",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/3.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Finish",
            category: "Identity",

        },
        {
            key: "4",
            id: "portfolioModal4",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/4.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Lines",
            category: "Branding",

        },
        {
            key: "5",
            id: "portfolioModal5",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/5.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Southwest",
            category: "Website Design",

        },
        {
            key: "6",
            id: "portfolioModal6",
            title: "Project Name",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            imgSrc: "assets/img/portfolio/6.jpg",
            description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
            client: "Window",
            category: "Photography",

        },
    ])
    return (
        <>
            {modals.map(modal => (
            <ModalItem key={modal.key} modal={modal} />
        ))}
        </>
    )
}

export default PortfolioModal
