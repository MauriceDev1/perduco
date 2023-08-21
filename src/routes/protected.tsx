import { Navigate, Outlet, useNavigate } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import Login from "../pages/users/Login";
import { useAuthContext } from "../context/AuthContext";

const Protected = () => { 
    const { isAuth } = useAuthContext();

    return (
      <Show when={isAuth()} fallback={<Login />}>
        <Outlet />
      </Show>
    );
};

export default Protected;