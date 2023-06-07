import { Link } from "react-router-dom";

const Login = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
            <div className="w-1/2 h-1/2 bg-white flex flex-col justify-center items-center gap-y-10">
                <h1 className="text-5xl uppercase font-semibold top-0">
                    Log in to your account
                </h1>
                <form onSubmit={onSubmit} className="flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="test@example.com"
                        name="email"
                        className="text-center"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        name="password"
                        className="text-center"
                    />
                    <br />
                    <button
                        type="submit"
                        className="bg-violet-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>
                <p className="text-small">
                    Don't have an account?{" "}
                    <Link
                        className="text-blue-400 hover:underline"
                        to="/signup"
                    >
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
