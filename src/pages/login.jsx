import React, {useState} from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
  const [inputs, setInputs] = useState({
    phoneNumber: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setInputs({...inputs, [e.target.id]: e.target.value})
  };

  const navigate = useNavigate();
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQxOTQ3NGY3NTgxYmE4ZTMzNjg3NyIsInBob25lTnVtYmVyIjoiMDgwMzgzNDA3Nzk5IiwiaWF0IjoxNjk0NzY3NDQ4LCJleHAiOjE2OTQ3NzgyNDh9.nRmjB2STm0AM7u3ktV07MD-1Ib_85f2MNloSwT-9ZAA'
  const OnSubmit = async (e) => {
    e.preventDefault();
    try{
        axios
        .post ('https://magneto-banking-application.onrender.com/api/signin', inputs, {
            // headers: {
            //     'Authorization': `Bearer ${token}` }
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("loginData", JSON.stringify(res.data))
            navigate('/Home')
            alert('logged in successfully')
        })
    } catch (err) {
        console.log(err);
    }
};
  return (
    <div className='flex justify-center mt-[4rem]'>
        <section>
            <div className='w-[12rem] ml-[7rem]'>
            <img src={ecommerceLogo} alt='' />
            </div>
            <span>
                <h1 className='text-2xl font-bold font-medium ml-[6rem]'>Welcome to Mangneto</h1>
                <p className='font-thin text-xl ml-[6rem]'> Log in a Mangneto account</p>
            </span>
            <form onSubmit={OnSubmit}>
            <div className='mt-8 gap-5'>
                <div className='mt-5'>
                <input type='number' placeholder='Phone Number' required id='phoneNumber' value={inputs.phoneNumber} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Password' required id='password' value={inputs.password} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
            </div>
            <div className='mt-9'>
               <a href='/Home'> <button className='w-[29.8rem] h-[3.6rem] bg-red-600 rounded text-white' >Log in</button></a>
                <div>
                    <p className='font-thin ml-3'>For further support, you may visit the Help Center or contact our <br></br>customer service team.</p>
                </div>
            </div>
            </form>
        </section>
    </div>
  )
}
