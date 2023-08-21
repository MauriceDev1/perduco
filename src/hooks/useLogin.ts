import { AuthForm } from "../types/Forms";
import { login} from '../api/auth'

const useLogin = () => {
    const userLogin = async (loginForm: AuthForm) => {
        const { user } = await login(loginForm);
        return user;
    }

    return {
        userLogin
    }
}

export default useLogin;