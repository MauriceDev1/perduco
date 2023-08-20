import { Component } from "solid-js";

interface InnerHeroProps {
    image?: string
}

const InnerHero:Component<InnerHeroProps> = ({image}) => {
    return (
        <div class="w-full bg-gray-100 h-96" style={{"background-image":`url(${image})`,"background-size":"cover"}}>

        </div>
    )
}

export default InnerHero;