import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    MyApp
                </div>

                <nav className="space-x-6">
                    <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-300 transition duration-300">About</Link>
                    <Link to="/service" className="hover:text-blue-300 transition duration-300">Services</Link>
                    <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-300">
                        Login
                    </button>
                    <button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header