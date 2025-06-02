import React, { use, useState } from 'react';
import { AuthContext } from '../../Authentication/Context/AuthContext';
import login from '../../assets/login.json'
import Lottie from 'lottie-react';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const Login = () => {
    const [error, setError] = useState('');
    const { logInUser, loginWithGoogle } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        console.log(email, password);

        // Login here
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(location.state || '/')
                setError('')
                console.log(user);
            })
            .catch(err => {
                const code = err.code;
                console.log(code)
            })
    }

    // handle google login
    const handleGoogleLogin = () => {
        console.log('object');
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(location.state || '/')
                setError('')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully..!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user);
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
                setError('Something went wrong, please try again later.')
            })
    }
    return (
        <div className="hero bg-base-200 py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie animationData={login} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-center'>Login Now </h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <div className="text-red-500">
                                    {error}
                                </div>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <div className="divider">Or</div>
                        </form>
                        <button
                            onClick={handleGoogleLogin}
                            type='button'
                            className="btn bg-white text-black btn-block border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;