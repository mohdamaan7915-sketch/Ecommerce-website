import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { i } from 'motion/react-client'

const Login = () => {
    const[currentState,setCurrent]=useState('Sign Up')
    const{token,setToken,navigate,backendUrl}=useContext(ShopContext)
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=usestate('')
    const onSubmitHandler=async(e)=>{
     e.preventDefault();
    try {
      if (currentState==='Sign Up') {
        const response=await axios.post(backendUrl+"/api/user/register",{name,email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(error.message)
        }
      }
      else{
        const response=await axios.post(backendUrl+"/api/user/login",{email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(error.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    }

    useEffect(()=>{
      if(token)
        navigate('/')
    },[token])
  return (
    <div>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 '>
      <div className='inline-flex item-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState==='Login'?'': <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input type="email"  onChange={(e)=>setEmail(e.target.value)}  value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password"  onChange={(e)=>setPassword(e.target.value)}  value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {
          currentState==='Login'
          ?<p onClick={()=>setCurrent('Sign up')}
          className='cursor-pointer'>Create Account</p>
          :<p onClick={()=>setCurrent('Login')}className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='cursor-pointer'>{currentState==='Login'?'Sign in':'Sign up'}</button>
      </form>
    </div>
  )
}

export default Login
