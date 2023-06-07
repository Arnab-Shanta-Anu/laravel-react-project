import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useStateContext } from "../context/ContextProvider";

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const { token, setUser, setToken } = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        axios
            .post(`${import.meta.env.VITE_BASE_URL}/signup`, payload,{
                headers: {
                    Authorization: `Bearer $token`
                }
            })
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
            <div className="w-1/2 h-1/2 bg-white flex flex-col justify-center items-center gap-y-10">
                <h1 className="text-5xl uppercase font-semibold top-0">
                    Sign up for free
                </h1>
                <form onSubmit={onSubmit} className="flex flex-col">
                    <label htmlFor="name">Name:</label>
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        className="text-center"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="test@example.com"
                        name="email"
                        className="text-center"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Your password"
                        name="password"
                        className="text-center"
                    />

                    <label htmlFor="password_confirmation">Password</label>
                    <input
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Your password"
                        name="password_confirmation"
                        className="text-center"
                    />
                    <br />
                    <button
                        type="submit"
                        className="bg-violet-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Signup
                    </button>
                </form>
                <p className="text-small">
                    Already have an account?
                    <Link className="text-blue-400 hover:underline" to="/login">
                        login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
