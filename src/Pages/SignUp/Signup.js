import React, { useContext, useState } from 'react';
import PrimaryButton from '../../Buttons/PrimaryButton';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
const Signup = () => {
    const {createUser, updateUserProfile, emailVerify, loading, user} = useContext(AuthContext);
    const handleSubmit = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const image = event.target.image.files[0]
        // console.log(name , email, password, image)

        const formData  = new FormData()
        formData.append('image', image)
        // console.log(formData)
        // be2d42a96c3161b1ca7d51366e24012b
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_apikey}`
        // console.log(url)
        fetch(url, {
            method: "POST", 
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log("Image URL ",data.data.display_url)
            // at first we upload the image after that we create the user 

              // create user 
        createUser(email, password)
        .then((result) => {
            const user = result.user
            console.log(user)
            // toast.success("User Created")
            updateUserProfile(name, data.data.display_url)
            .then( ()=> {
                toast.success("User Created")
                console.log(user)
                emailVerify()
                .then( () => {
                    toast.success("Check your email spam to verify the email") 
                })
                .catch(err => {
                    toast.err(err.message)
                })
                

            })
            .catch(err => {
                toast.error("Error in update profile",err)
            })
        })
        .catch((err) => {
            const message = (err.message)
            toast.error(`Error in user creation ${message}`)
        })

        })
        // if we get some error while image is uploading 
        .catch(err => {
            console.log("erro img upload",err)
        })

      
    }
    return (
        <div className='flex justify-center items-center '>
            <div className="form-container bg-gray-100 flex flex-col max-w-md p-6 rounded-md">
                <div className='title-container mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                        <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form noValidate="" action="" 
                onSubmit={handleSubmit}
                className='space-y-12 ng-untouched ng-pristine ng-valid'>
                        <div className='space-y-4'>
                            {/* name input here  */}

                            <div>
                                <label htmlFor="name" className='block mb-2 text-sm'>Name</label>
                                <input type="text" name='name' id="name" required placeholder='Enter your Name here' 
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900' />
                            </div>
                            {/* image input field here  */}
                            <div>
                                <label htmlFor="image" className='block mb-2 text-sm'>Select Image: </label>
                                <input type="file"
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                                />
                            </div>

                            {/* email address input field here  */}
                            <div>
                                <label htmlFor="email" className='block mb-2 text-sm'>Email Address</label>
                                <input type="email" name='email' required id='email' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900' />
                            </div>
                            {/* password field  */}
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                name='password'
                                id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                                />
                            </div>
                        </div>
                        {/* here the another div started  */}
                        <div className='space-y-2'>
                            <div>
                                <PrimaryButton type="submit"
                                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                                >
                                            Sign up
                                </PrimaryButton>
                            </div>
                        </div>
                </form>
                {/* form end here  */}
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-600'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                {/* social icons are here  */}
                <div className='flex justify-center space-x-4'>
                <button aria-label='Log in with Google' className='m-3 rounded-sm text-2xl' >
                            <FcGoogle></FcGoogle>
          </button>
                <button aria-label='Log in with Google' className='m-3 rounded-sm text-2xl' >
                          <FaTwitter></FaTwitter>
          </button>
                <button aria-label='Log in with Google' className='m-3 rounded-sm text-2xl' >
                      <FaGithub></FaGithub>
          </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-600' > Already have an account yet? {' '}
                <Link to="/login" className='hover:underline'>Sign In</Link>
                .
                </p>
            </div>
        </div>
    );
};

export default Signup;