import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from '../Actions/User';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SlidingForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const { isAuthenticated, error, user } = useSelector((state) => state.user);
    const [isSignUp, setIsSignUp] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        // Show success message on authentication success
        if (isAuthenticated) {
            toast(`Welcome ${user.name}`);
        }

        // Show error message if there's an error
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearErrors' }); // Clear error after showing toast
        }
    }, [isAuthenticated, error, user, dispatch]);

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form reload
        dispatch({ type: 'clearErrors' }); // Clear previous errors
        dispatch(loginUser(email, password)); // Dispatch login action
    };

    // Handle Register
    const handleRegister = (e) => {
        e.preventDefault(); // Prevent form reload
        dispatch({ type: 'clearErrors' }); // Clear previous errors
        dispatch(registerUser(name, email, password)); // Dispatch register action
    };

    return (
        <div style={{ background: 'white' }} className="w-full h-screen flex items-center justify-center bg-cover bg-center">
            <div className="relative flex justify-center items-center">
                <Toaster />
                {/* Sign In Form */}
                <form
                    onSubmit={handleLogin}
                    className={`${isSignUp ? "scale-[.5]" : "scale-1"
                        } flex flex-col w-96 backdrop-blur-lg bg-[rgba(17,25,40,0.75)] border border-white/20 rounded-xl p-10 shadow-2xl transition-all duration-300`}
                >
                    <div className="text-lg text-white font-light">
                        Welcome <span className="font-bold">Back</span>
                    </div>
                    <div className="text-sm text-white mb-8 tracking-wide">
                        Sign in to your account
                    </div>
                    <div className="w-full mb-8 relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full h-10 bg-transparent border-2 border-gray-400 rounded-lg p-3 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-200"
                            placeholder="Email"
                        />
                    </div>
                    <div className="w-full mb-8 relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-2 border rounded-md"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className="w-full py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                        Sign In
                    </button>
                </form>

                {/* Sign Up Form */}
                <form
                    onSubmit={handleRegister}
                    className={`${isSignUp ? "scale-1" : "scale-[.6]"} flex flex-col w-96 backdrop-blur-lg bg-[rgba(17,25,40,0.75)] border border-white/20 rounded-xl p-10 shadow-2xl transition-all duration-300`}
                >
                    <div className="text-lg text-white font-light">
                        Get <span className="font-bold">Started</span>
                    </div>
                    <div className="text-[12px] text-white mb-8 tracking-wide">
                        Create an account
                    </div>
                    <div className="w-full mb-8 relative">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-full h-10 bg-transparent border-2 border-gray-400 rounded-lg p-3 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-200"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full mb-8 relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full h-10 bg-transparent border-2 border-gray-400 rounded-lg p-3 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-200"
                            placeholder="Email"
                        />
                    </div>
                    <div className="w-full mb-8 relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-2 border rounded-md"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className="w-full py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                        Sign Up
                    </button>
                </form>

                {/* Sliding Card */}
                <div
                    className={`absolute top-1/2 translate-y-[-50%] right-0 w-[400px] h-[400px] bg-cover bg-center rounded-r-xl p-10 transform ${isSignUp ? "translate-x-[-440px]" : "translate-x-[50px]"} transition-all duration-500 ease-in-out`}
                    style={{
                        background: 'white'
                    }}
                >
                    <div className="text-3xl font-semibold mb-4">
                        Ocean <span className="text-green-500">Company</span>
                    </div>
                    <p className="text-sm text-justify mb-6 text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        voluptate minus reprehenderit ex voluptates deleniti beatae ea,
                        ratione provident soluta sint debitis facere quibusdam
                        necessitatibus.
                    </p>
                    <div className="text-sm text-black">
                        {isSignUp ? "Existing User?" : "New User?"}
                        <button
                            className="ml-3 text-sm text-white bg-green-500 rounded-lg px-4 py-1"
                            onClick={toggleForm}
                        >
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingForm;
