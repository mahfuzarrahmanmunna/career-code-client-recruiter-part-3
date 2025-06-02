import React, { use, useState } from 'react';
import register from '../../assets/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Authentication/Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, } = use(AuthContext)
    const [error, setError] = useState('')
    console.log(createUser);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // create user here
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // updatedUser({ displayName: name, photoUrl: photo })
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully..! Please Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
                setError(code)
            })
    }
    return (
        <div className="hero bg-base-200 py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie animationData={register} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-center'>Register Now </h1>
                        <form onSubmit={handleRegister} className="fieldset">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;