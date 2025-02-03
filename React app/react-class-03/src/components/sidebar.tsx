import { FaBeer } from 'react-icons/fa';
import { AiFillBulb } from "react-icons/ai";

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">MyApp</h2>
                <button className="text-gray-400 hover:text-white focus:outline-none">
                <AiFillBulb />
                </button>
            </div>

            <nav>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="/"
                            className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition duration-300"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard"
                            className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition duration-300"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="/settings"
                            className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition duration-300"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;