import { Timestamp, doc, setDoc } from "firebase/firestore";
import { register } from "../api/auth";
import { RegisterForm } from "../types/Forms";
import { db } from "../firebase/config";

const useRegister = () => {
    const registerUser = async (registerForm: RegisterForm) => {
        const { user } = await register(registerForm);
        if(user.uid ){
            await setDoc(doc(db, "users", `${user.uid}`), {
                name: registerForm.name,
                email: registerForm.email,
                createdAt: Timestamp.now(),
              });
        }
        return user
    }

    return {
        registerUser
    }
}

export default useRegister;