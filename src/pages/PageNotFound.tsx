import { Component } from "solid-js";
import Logo from "../assets/img/Perduco-Law-Logo.png"

const PageNotFound:Component = () => {
    return (
        <div class="w-full bg-gray-50 min-h-[80vh] flex">
            <div class="m-auto">
                <img src={Logo} />
                <div class="w-60 h-60 flex border mt-10 border-sky-400 bg-sky-50 text-sky-500 rounded-full">
                    <div class="m-auto text-center">
                        <h1 class="text-7xl">
                            404
                        </h1>
                        <h2 class="text-xl">
                        : Page Not Found
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;