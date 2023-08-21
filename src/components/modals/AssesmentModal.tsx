import { Component } from "solid-js";
import { useAssesModalContext } from "../../context/AssesmentModal";
import { IoCloseOutline } from "solid-icons/io";

const AssesmentModal: Component = () => {
    const { modalState, setModalState } = useAssesModalContext();

    return (
        <div class={`${modalState() ? 'flex' : 'hidden'} w-full fixed  h-screen top-0 left-0 bg-black z-50 bg-opacity-60`}>
            <div class="m-auto w-11/12 relative lg:w-6/12 p-5 bg-white rounded-sm">
                <button 
                    class="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                    onClick={() => setModalState(false)}
                >
                    <IoCloseOutline class="text-2xl" />
                </button>
                <h1 class="text-2xl font-semibold text-gray-500 pb-3">
                    Book A Case Assesment
                </h1>
            </div>
        </div>
    )
}

export default AssesmentModal;