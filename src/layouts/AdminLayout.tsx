import { A } from "@solidjs/router";
import { Component } from "solid-js";

interface  AdminLayoutProps {
    children: any
}

const AdminLayout: Component<AdminLayoutProps> = ({children}) => {
    return (
        <div class="w-full h-screen flex justify-center fixed pt-7 bg-gray-50">
            <div class="w-10/12 flex h-[80vh] gap-5">
                <div class="w-[300px] h-full bg-gray-100 border border-gray-200 rounded-sm">
                    <ul class="w-full p-2">
                        <A href="/profile">
                            <li class="py-3 px-2 border-b border-gray-300 hover:bg-gray-200 rounded-t-sm">
                                Profile
                            </li>
                        </A>
                        <A href="/accounts">
                            <li class="py-3 px-2 border-b border-gray-300 hover:bg-gray-200">
                                Accounts
                            </li>
                        </A>
                        <A href="/notifications">
                            <li class="py-3 px-2 border-b border-gray-300 hover:bg-gray-200">
                                Notifications
                            </li>
                        </A>
                        <A href="/messages">
                            <li class="py-3 px-2 border-b border-gray-300 hover:bg-gray-200">
                                Messages
                            </li>
                        </A>
                        <A href="/settings">
                            <li class="py-3 px-2 border-b border-gray-300 hover:bg-gray-200">
                                Settings
                            </li>
                        </A>
                    </ul>
                </div>
                <div class="w-full bg-gray-100 border border-gray-200 p-5 rounded-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;