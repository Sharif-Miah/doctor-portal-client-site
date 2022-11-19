import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <h1 className='text-4xl'>Login</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;