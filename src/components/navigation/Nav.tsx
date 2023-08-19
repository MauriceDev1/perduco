import { A } from "@solidjs/router";
import { Component, For } from "solid-js";
import Logo from "../../assets/img/Perduco-Law-Logo.png"
import { IoMenuOutline } from 'solid-icons/io'

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
            <div class="hidden w-full bg-gray-800 py-2 lg:flex justify-center">
                <div class="w-10/12 flex justify-between text-white text-xs">
                    <div class="flex gap-5">
                        <div>
                            Call: 0330 165 9735
                        </div>
                        <div>
                            Email: info@perducolaw.co.uk
                        </div>
                    </div>
                    <div>
                        We are available Mon - Fri 7am - 8pm Sat - Sun 9am - 5pm
                    </div>
                </div>
            </div>
            <nav class="w-full flex justify-center py-2 sticky top-0 bg-white">
                <div class="w-11/12 sm:w-10/12 flex justify-between items-center">
                    <div>
                        <img src={Logo} class="h-8"/>
                    </div>
                    <div class="lg:block hidden">
                        <ul class="w-full flex gap-12">
                            <For each={Links}>{
                                (l) => <A href={l.link}><li>{l.name}</li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="lg:flex gap-3 hidden">
                        <button class="border h-9 px-5 rounded-sm">
                            Login
                        </button>
                        <button class="border border-black h-9 px-5 text-white rounded-sm bg-black">
                            Register
                        </button>
                    </div>
                    <div class="lg:hidden">
                        <IoMenuOutline class="text-2xl"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;