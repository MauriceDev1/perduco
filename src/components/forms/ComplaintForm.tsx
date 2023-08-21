import { Component, createSignal } from "solid-js";

const ComplaintForm: Component = () => {
    const [formData,setFormData] = createSignal({
        title: '',
        name: '',
        address: '',
        telephone: '',
        email: '',
        ourRef: '',
        feeRef: '',
        detailComplaint: '',
        how: '',
    });
    const [formDataError,setFormDataError] = createSignal({
        title: '',
        name: '',
        address: '',
        telephone: '',
        email: '',
        ourRef: '',
        feeRef: '',
        detailComplaint: '',
        how: '',
    });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <p class="py-2 px-1">
                    Title
                </p>
                <select
                    name="title"
                    class="w-full rounded-sm h-9 outline-none px-1 border"
                >
                    <option>Select</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Sir</option>
                    <option>Doc</option>
                    <option>Prof</option>
                </select>
                <p class="py-2 px-1">
                    Name
                </p>
                <input 
                    name="name"
                    type="text"
                    placeholder={formDataError().name ? formDataError().name : 'Name'}
                    class={`${formDataError().name ? 'border-red-400 bg-red-50 text-red-500': '' } w-full rounded-sm h-9 outline-none px-1 border`}
                />
                <p class="py-2 px-1">
                    Address
                </p>
                <input 
                    name="address"
                    type="text"
                    placeholder={formDataError().address ? formDataError().address : 'Address'}
                    class={`${formDataError().address ? 'border-red-400 bg-red-50 text-red-500': '' } w-full rounded-sm h-9 outline-none px-1 border`}
                />
                <p class="py-2 px-1">
                    Telephone
                </p>
                <input 
                    name="telephone"
                    type="tel"
                    placeholder={formDataError().telephone ? formDataError().telephone : 'Address'}
                    class={`${formDataError().telephone ? 'border-red-400 bg-red-50 text-red-500': '' } w-full rounded-sm h-9 outline-none px-1 border`}
                />
                <p class="py-2 px-1">
                    Email
                </p>
                <input 
                    name="Email"
                    type="email"
                    placeholder={formDataError().email ? formDataError().email : 'Address'}
                    class={`${formDataError().email ? 'border-red-400 bg-red-50 text-red-500': '' } w-full rounded-sm h-9 outline-none px-1 border`}
                />
            </div>
        </form>
    )
}

export default ComplaintForm;