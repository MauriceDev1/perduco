import { A, useNavigate } from "@solidjs/router";
import { IoEye, IoEyeOffOutline, IoLogoFacebook, IoLogoGoogle } from "solid-icons/io";
import { createSignal } from "solid-js";
import useLogin from "../../hooks/useLogin";
import cookie from "cookiejs";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const [loading,setLoading] = createSignal(false);
    const [showPassword,setShowPassword] = createSignal(false);
    const [formData,setFormData] = createSignal({
        email: '',
        password: '',
    });
    const [formDataError,setFormDataError] = createSignal({
        email: '',
        password: '',
    });
    const {
        setIsAuth,
        setUserId,
        setUserEmail,
    } = useAuthContext();
    const {userLogin} = useLogin();
    const navigate = useNavigate();

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
            email,
            password
        } = formData();
        if(email === '' || password === ''){
            if(email === ''){
                setFormDataError((prv) => ({...prv,email: 'Email is required!'}));
            }
            if(password === ''){
                setFormDataError((prv) => ({...prv,password: 'Password is required!'}));
            }
            return
        }
        setLoading(true);
        const data = {
            email: formData().email,
            password: formData().password,
        }
        const result = await userLogin(data);
        if(result.uid) {
            cookie.set('auth', 'true' ,2);
            cookie.set('userId', result.uid ,2);
            setUserId(result.uid);
            setIsAuth(true);
            setUserEmail(data.email);
            setLoading(false);
            navigate('/profile')
        } else {
            setLoading(false);
        }
    };

    const handleShowPassword = (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword())
    }

    return (
        <div class="w-full h-screen flex bg-slate-500 fixed">
            <div class="w-full max-w-[430px] py-5 px-3 border m-auto mt-28 bg-white rounded shadow">
                <h1 class="text-center text-xl">Login</h1>
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
                        <div class="w-full relative">
                            <input 
                                name="password"
                                type={showPassword() ? "text" : "password"}
                                value={formData().password ? formData().password : ''}
                                onChange={handleFormChange}
                                onInput={handleFormErrorChange}
                                placeholder={formDataError().password ? formDataError().password : 'Enter your password' }
                                class={`${formDataError().password ? 'bg-red-50 border-red-400 placeholder:text-red-500' : '' } border w-full  rounded-sm h-9 outline-none px-2`}
                            />
                            <div class="absolute  top-2 right-2 text-gray-300">
                                {showPassword() 
                                    ?
                                        <button
                                            onClick={handleShowPassword}
                                        >
                                            <IoEyeOffOutline class="text-lg" />
                                        </button>
                                    :
                                        <button
                                            onClick={handleShowPassword}
                                        >
                                            <IoEye class="text-lg" />
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                    <button class="w-full mt-7 text-white flex h-10 bg-gray-900 rounded-sm">
                        {loading() 
                            ?
                                <div class="loader m-auto"></div>
                            :
                                <p class="m-auto">
                                    Submit
                                </p>
                        }
                    </button>
                    <div class="mt-2 w-full flex px-2 text-sm text-sky-400 justify-between">
                        <A href="/register">
                            <p>
                                Dont have an account
                            </p>
                        </A>
                        <A href="/forgot_password">
                            <p>
                                Forgot password
                            </p>
                        </A>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;