


import { setUser } from './../redux/features/auth/authSlice';
import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from './../redux/hook';
import { verifyToken } from './../utils/verifyToken';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {register,handleSubmit}= useForm({
        defaultValues:{
            userId: '0001',
            password: 'admin12345'
        }
    });

    const [login,{data,error} ]= useLoginMutation()


   

    const onSubmit = async (data)=>{
        
        const userInfo = {
            id: data.userId,
            password: data.password,
        }

       const res = await login(userInfo).unwrap()
       
       const user = verifyToken(res.data.accessToken);

       
       dispatch(setUser({user:user,token:res.data.accessToken}))
       navigate(`/${user.role}/dashboard`)

     
       
        
    }
    return (
        
            
            <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="userId">ID:</label>
            <input type="text" id='userId' {...register('userId')} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' {...register('password')} />
        </div>
        <Button htmlType='submit'>Login</Button>
            </form>
    
    );
};

export default Login;