import cookie from "cookiejs";
import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    isAuth: Accessor<boolean | string>,
    setIsAuth: Setter<boolean>
    userId: Accessor<boolean | string>
    setUserId: Setter<string>
    userEmail: Accessor<string | null>
    setUserEmail: Setter<string>
}

const AuthContext = createContext<ContextProps>();

export function AuthContextProvider(props: any) {
    const authCookie = cookie.get('auth')
    const userIdCookie = cookie.get('userId')
    const [ isAuth, setIsAuth ] = createSignal(authCookie);
    const [ userId, setUserId ] = createSignal(userIdCookie);
    const [ userEmail, setUserEmail ] = createSignal(null);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, userId, setUserId, userEmail, setUserEmail}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)!;