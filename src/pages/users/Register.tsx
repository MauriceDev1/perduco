import { A, useNavigate } from "@solidjs/router";
import { IoLogoFacebook, IoLogoGoogle } from "solid-icons/io";
import { createSignal } from "solid-js";
import useRegister from "../../hooks/useRegister";
import cookie from "cookiejs";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
    const [loading,setLoading] = createSignal(false);
    const [formData,setFormData] = createSignal({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const [formDataError,setFormDataError] = createSignal({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const {registerUser} = useRegister();
    const navigate = useNavigate();
    const {
        setIsAuth,
        setUserId,
        setUserEmail,
    } = useAuthContext();

    const handleFormChange = (e: any) => {
        const {name,value} = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:value}));
    };

    const handleFormErrorChange = (e: any) => {
        const {name} = e.currentTarget;
        setFormDataError((prv) => ({...prv,[name]:''}));
    };

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        const {
            name,
            surname,
            email,
            password,
        } = formData();
        if(name === '' || name.length < 3 || surname === '' || surname.length < 3 || email === '' || password === ''){
            if(name === ''){
                setFormDataError((prv) => ({...prv,name: 'Name is required!'}));
            } else if (name.length < 3){
                setFormData((prv) => ({...prv,name: ''}));
                setTimeout(() => {
                    setFormDataError((prv) => ({...prv,name: "Name can't be less than 2 characters !"}));
                }, 10);
            }
            if(surname === ''){
                setFormDataError((prv) => ({...prv,surname: 'Surname is required!'}));
            } else if (surname.length < 3){
                setFormData((prv) => ({...prv,surname: ''}));
                setTimeout(() => {
                    setFormDataError((prv) => ({...prv,surname: "Surname can't be less than 2 characters !"}));
                }, 10);
            }
            if(email === ''){
                setFormDataError((prv) => ({...prv,email: 'Email is required!'}));
            }
            if(password === ''){
                setFormDataError((prv) => ({...prv,password: 'Password is required!'}));
            }
            return
        };
        
        try {
            setLoading(true);
            const data = {
                name: formData().name,
                surname: formData().surname,
                email: formData().email,
                password: formData().password,
            }
            const result = await registerUser(data);
            if(result.uid){
                cookie.set('auth', 'true' ,2);
                cookie.set('userId', result.uid ,2);
                setIsAuth(true);
                setUserId(result.uid);
                setUserEmail(data.email);
                setLoading(false);
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };

    return (
        <div class="w-full h-screen flex bg-slate-500 fixed">
            <div class="w-full max-w-[430px] py-5 px-3 mt-12 border m-auto bg-white rounded shadow">
                <h1 class="text-center text-xl">Register</h1>
                <div class="w-full flex gap-4 mt-6">
                    <button class="w-1/2 h-10 border flex rounded-sm border-red-400 text-red-400">
                        <p class="flex gap-3 m-auto items-center">
                            <IoLogoGoogle />Google
                        </p>
                    </button>
                    <button class="w-1/2 h-10 border flex rounded-sm" style={{"border-color":"#4267B2", color:"#4267B2"}}>
                        <p class="flex gap-3 m-auto items-center">
                            <IoLogoFacebook />Facebook
                        </p>
                    </button>
                </div>
                <div class="w-full flex items-center py-3">
                    <div class="w-full border-b"></div>
                    <div class="px-5 text-sm text-gray-500">
                        OR
                    </div>
                    <div class="w-full border-b"></div>
                </div>
                <form 
                    class="w-full text-sm"
                    onSubmit={handleSubmitForm}
                >
                    <div>
                        <p class="py-2 px-1 text-gray-500">
                            Name
                        </p>
                        <input 
                            name="name"
                            type="text"
                            value={formData().name ? formData().name : ''}
                            onChange={handleFormChange}
                            onInput={handleFormErrorChange}
                            placeholder={formDataError().name ? formDataError().name : 'Enter your name' }
                            class={`${formDataError().name ? 'bg-red-50 border-red-400 placeholder:text-red-500' : '' } border w-full  rounded-sm h-9 outline-none px-2`}
                        />
                    </div>
                    <div>
                        <p class="py-2 px-1 text-gray-500">
                            Surname
                        </p>
                        <input 
                            name="surname"
                            type="text"
                            value={formData().surname ? formData().surname : ''}
                            onChange={handleFormChange}
                            onInput={handleFormErrorChange}
                            placeholder={formDataError().surname ? formDataError().surname : 'Enter your surname' }
                            class={`${formDataError().surname ? 'bg-red-50 border-red-400 placeholder:text-red-500' : '' } border w-full  rounded-sm h-9 outline-none px-2`}
                        />
                    </div>
                    <div>
                        <p class="py-2 px-1 text-gray-500">
                            Email
                        </p>
                        <input 
                            name="email"
                            type="email"
                            value={formData().email ? formData().email : ''}
                            onChange={handleFormChange}
                            onInput={handleFormErrorChange}
                            placeholder={formDataError().email ? formDataError().email : 'Enter your email' }
                            class={`${formDataError().email ? 'bg-red-50 border-red-400 placeholder:text-red-500' : '' } border w-full  rounded-sm h-9 outline-none px-2`}
                        />
                    </div>
                    <div>
                        <p class="py-2 px-1 text-gray-500">
                            Password
                        </p>
                        <input 
                            name="password"
                            type="password"
                            value={formData().password ? formData().password : ''}
                            onChange={handleFormChange}
                            onInput={handleFormErrorChange}
                            placeholder={formDataError().password ? formDataError().password : 'Enter your password' }
                            class={`${formDataError().password ? 'bg-red-50 border-red-400 placeholder:text-red-500' : '' } border w-full  rounded-sm h-9 outline-none px-2`}
                        />
                    </div>
                    <button class="w-full mt-7 text-white flex h-10 bg-gray-900 rounded-sm">
                        {loading() 
                            ?
                                <div class="loader m-auto"></div>
                            :
                                <p class="m-auto">
                                    Register
                                </p>
                        }
                    </button>
                    <div class="mt-2 w-full flex px-2 text-sm text-sky-400 justify-between">
                        <A href="/login">
                            <p>
                                have an account
                            </p>
                        </A>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;