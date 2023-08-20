import { Component } from "solid-js";

interface InnerHeroProps {
    image?: string
}

const InnerHero:Component<InnerHeroProps> = ({image}) => {
    return (
        <div class="w-full bg-gray-100 h-96 relative" style={{"background-image":`url(${image})`,"background-size":"cover"}}>
            <div class="w-full h-full absolute bg-black top-0 left-0 bg-opacity-50">

            </div>
        </div>
    )
}

export default InnerHero;