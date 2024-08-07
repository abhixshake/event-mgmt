import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className='w-[600px]'>
                    {/* We use the modal id to connect to the navbar */}
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br></br>
                                <input type="text" placeholder="Enter your full name" className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("name", { required: true })}/> 
                                {errors.name && <span className="text-red-500"><br/>Name is required</span>}

                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br></br>
                                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}/>

                                {errors.email && <span className="text-red-500"><br/>Email is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br></br>
                                <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500"><br/>Password is required</span>}
                            
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Signup</button>
                                <p className='text-xl'>Have account?{" "}
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }>Login

                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
