import { Component } from "solid-js";
import InnerHero from "../../components/hero/InnerHero";
import CareerImg from "../../assets/img/career.jpg"

const Careers:Component = () => {
    return (
        <>
            <InnerHero image={CareerImg} />
            <div class="w-full flex justify-center py-16">
                <div class="w-10/12">

                </div>
            </div>
        </>
    )
}

export default Careers;