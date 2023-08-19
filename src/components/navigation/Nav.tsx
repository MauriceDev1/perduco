import { A } from "@solidjs/router";
import { Component, For } from "solid-js";
import Logo from "../../assets/img/Perduco-Law-Logo.png"

const Nav: Component = () => {

    const Links = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About',
            link: '/about'
        },
        {
            id: 3,
            name:  'Services',
            link: '',
        },
        {
            id: 4,
            name: 'Our Team',
            link: '/our_team'
        },
        {
            id: 5,
            name: 'Contact',
            link: '/contact'
        },
    ]

    return (
        <>
            <div class="w-full bg-black py-2">

            </div>
            <nav class="w-full flex justify-center py-2 sticky top-0">
                <div class="w-10/12 flex justify-between items-center">
                    <div>
                        <img src={Logo} class="h-8"/>
                    </div>
                    <div>
                        <ul class="w-full flex gap-12">
                            <For each={Links}>{
                                (l) => <A href={l.link}><li>{l.name}</li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="flex gap-3">
                        <button class="border h-9 px-5 rounded-sm">
                            Login
                        </button>
                        <button class="border border-black h-9 px-5 text-white rounded-sm bg-black">
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;