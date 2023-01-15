import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    //signIn / Login 
    const handleSignIn  = event =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value;
        console.log(email ,password)

        //login
        signIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            toast.success("User LogedIn")

        })
        .catch(err => {
            toast.error(err.message)
        })


    }
    
    return (
       <div className='flex justify-center items-center pt-8 '>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
            <p className='text-sm text-gray-400s'>Sign in to access your account</p>

        </div>
        <form action=""
        onSubmit={handleSignIn}
        noValidate=''
        className='space-y-6 ng-untouched ng-pritine ng-valid'
        >
            <div className='space-y-4'>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input type="email" 
                    name='email'
                    id='email'
                    required
                    placeholder='Enter your Enail Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 '
                    />
                </div>
               <div>
               <div className='flex justify-between '>
                    <label htmlFor="password">
                        Password
                    </label>
                </div>
                <input type="password" name="password" id="password"
                required 
                placeholder='********'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                />
               </div>
            </div>
            <div>
                <PrimaryButton 
                type='submit'
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                    Sign in
                </PrimaryButton>
            </div>
        </form>
        <div className='space-y-1'>
            <button className='text-xs hover:underline text-gray-400'>
                Forgot password?
            </button>

        </div>
        <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:bg-gray-400 '>
                    Login with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
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
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account yet? {' '}
                    <Link to="/signup" className='hover:underline text-gray-600'>
                        sign up
                    </Link>
                    .
                </p>
        </div>

       </div>
    );
};

export default Login;