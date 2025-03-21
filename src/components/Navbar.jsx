import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuthStore();
    const navigate = useNavigate();
    const { totalQuantity } = useCartStore();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav class="fixed top-0 left-0 w-full bg-pink-700 border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-8"
                        alt="Kel 1 Gacor Logo"
                    />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Kel 1 Gacor's Marketplace
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-pink-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-pink-500 bg-pink-700 md:bg-pink-700 border-pink-800">
                        <li>
                            <a
                                href="/"
                                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href="/cart"
                                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent flex gap-3"
                            >
                                Cart
                                <span class="bg-indigo-50 text-indigo-800 text-xs font-semibold px-2.5 pt-1 rounded-full ">
                                    {totalQuantity()}
                                </span>
                            </a>
                        </li>
                        <li>
                            {isAuthenticated ? (
                                <>
                                    <span className="text-white">
                                        Hi, {user?.name}
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="ml-4 text-white"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <a
                                    href="/login"
                                    class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                                >
                                    Login
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
