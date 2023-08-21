import { IoCheckmark } from "solid-icons/io";
import { Component } from "solid-js";

const StepperComponent: Component = () => {
    return (
        <div class="w-full flex items-center justify-center py-5">
            <div class="w-12 h-12 border border-gray-300 rounded-full flex">
                <div class="m-auto">
                    1
                </div>
            </div>
            <div class="w-1/4 border-b border-gray-300"></div>
            <div class="w-12 h-12 border border-gray-300 rounded-full flex">
                <div class="m-auto">
                    2
                </div>
            </div>
            <div class="w-1/4 border-b border-gray-300"></div>
            <div class="w-12 h-12 border border-gray-300 rounded-full flex">
                <div class="m-auto">
                    3
                </div>
            </div>
            <div class="w-1/4 border-b border-gray-300"></div>
            <div class="w-12 h-12 border border-gray-300 rounded-full flex">
                <div class="m-auto">
                    <IoCheckmark />
                </div>
            </div>
        </div>
    )
}

export default StepperComponent;