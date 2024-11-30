import React,{useRef, useState} from 'react'
import Header from './Header'
import {checkValidate} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE } from '../utils/contants';

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    
    const dispatch=useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const toggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleSubmit=()=>{

        const message=checkValidate(email.current.value,password.current.value);
        
        setErrorMessage(message);
           

        if(!isSignInForm){
           
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
              
                updateProfile(user, {
                  displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/114753071?v=4"
                }).then(() => {
                  // Profile updated!
                  const {uid,displayName,email,photoURL} = auth.currentUser;
                  dispatch(addUser({uid,displayName,email,photoURL}))
                  
                  // ...
                }).catch((error) => {
                  // 
                  console.log("Update-profile error-"+error);
                  // ...
                });

               
                
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrorMessage(errorCode+"-"+errorMessage);
              });
            }

        else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
             
             
              // ...
                })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                 });
        }

    }
    
  return (
    <div>
        <Header />
        <div
  className="fixed -z-10 w-full h-screen bg-cover bg-center md:bg-fixed"
  style={{ backgroundImage: `url(${BG_IMAGE})` }}
>
</div>
        <form  onSubmit={(e)=>e.preventDefault()} className='w-full md:w-3/12 p-12 absolute bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-85'>
        

        <p className='text-3xl font-bold py-4'>{isSignInForm?"Sign-In":"Sign-Up"}</p>
        { !isSignInForm &&
         <input 
            ref={name}
            type='text' 
            placeholder='First Name' 
            className='p-4 my-4 w-full bg-gray-800'
            />}

            <input 
            ref={email} 
            type='email' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-800'
            />

            <input 
             ref={password} 
             type='password' 
             placeholder='Password' 
             className='p-4 my-4 w-full bg-gray-800'
             />

            <p className='text-red-700 font-bold p-4'>{errorMessage}</p>

            <button 
            className='bg-red-600 w-full my-6 p-4 rounded-lg' 
            onClick={handleSubmit}>
                {isSignInForm?"Sign In":"Sign Up"}
            </button>

            <p 
            className='text-center'>
                {isSignInForm?"New to Netflix? ":"Already a member? "}
                <span className='text-red-600 cursor-pointer'
                 onClick={toggleForm}>
                    {isSignInForm?"Sign Up ":"Sign In "}
                </span>
            </p>
           
        </form>
    </div>
  )
}

export default Login