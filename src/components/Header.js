import React,{useEffect} from 'react'
import avatar from "../assets/avatar.jpg"
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/contants';
import { toggleGPTsearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const user=useSelector(store=>store.user);
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
 

  const handlechangeLanguage=(e)=>{
    dispatch(changeLanguage(e.target.value))

  }


  const handletoggleGPTview=()=>{
    dispatch(toggleGPTsearchView())

  }


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful
      navigate("/");
      dispatch(removeUser());
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,displayName,email,photoURL} = user;
        dispatch(addUser({uid,displayName,email,photoURL}))
        navigate("/browse");

      


      } else {
        dispatch(removeUser())
        navigate("/");
      }
      return ()=>unsubscribe();
    });
  },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img
        className='w-56 mx-auto md:mx-0'
         src={LOGO}
        alt='Netflix Logo'/>

       {user && 
        <div className='flex py-5'>
          { showGPTSearch && <select className='pr-2 m-2 rounded-sm'
          
          onChange={handlechangeLanguage}>
            {SUPPORTED_LANGUAGES.map((lang)=>
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
        <button className='font-bold text-white mr-5 bg-purple-600 rounded-lg p-2'
        onClick={handletoggleGPTview}>{showGPTSearch?"Homepage":"GPT-Search"}</button>
          <img
          className='w-10 h-10 mt-2'
          src={user.photoURL?user.photoURL:avatar}
          alt='avatar'/>
          <button className='font-bold text-white'
          onClick={handleSignOut}>Sign-Out</button>
        </div>}
    </div>
    
  )
}

export default Header