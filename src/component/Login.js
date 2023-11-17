//import loginLeftImage from '../assets/images/ds-login-bg.jpeg';
import dsLogoImage from '../assets/images/data-soft-logo.png';

import Lottie from 'react-lottie';
import lottieAnimation from '../assets/lotties/lottie-animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
}
function Login() {
    return (
        <div className={"signin-wrapper overflow-hidden"}>
            <div className={"w-screen h-screen flex flex-col md:flex-row justify-center items-center"}>

                <div className='signin-left hidden md:inline md:w-1/2 p-12'>
                    <Lottie options={defaultOptions} />
                </div>

                <div className="signin-right w-full md:w-1/2 min-h-screen flex flex-col py-6 m-auto">
                    <div className="logo w-36 md:w-52 md:h-16 m-6 md:m-8">
                        <img className={"h-auto max-w-full"} src={dsLogoImage} alt="logo" />
                    </div>

                    <div className="signin-heading">
                        <h3 className={'text-xl md:text-2xl text-center font-medium mb-6'}>Sign in</h3>
                    </div>


                    <div className="signin-form flex flex-col justify-center items-center">
                        <form action="#" className='flex flex-col justify-center gap-6'>
                            <div>
                                <label htmlFor="email" className={'block text-base md:text-xl font-normal text-[#232323] mb-2'}>Email</label>
                                <input type="email" className={'w-full md:w-80 border-2 rounded-lg hover:border-dashed px-4 py-2 focus:outline-none focus:border-blue-500'}
                                    placeholder={'Enter your email'} />
                            </div>
                            <div>
                                <label htmlFor="password" className={'block text-base md:text-xl font-normal text-[#232323] mb-2'}>Password</label>
                                <input type="password" className={'w-full md:w-80 border-2 rounded-lg hover:border-dashed px-4 py-2 focus:outline-none focus:border-blue-500'}
                                    placeholder={'Enter your password'} />
                                <small className={"flex justify-end text-gray-500 font-bold"}>Forgot password?</small>
                            </div>

                            <div>
                                <button className={"w-full md:w-80  bg-[#253C89] text-white font-bold p-2 rounded-md"}> Sign in </button>
                                <br></br>
                                <small className={"text-center p-8 text-gray-800 text-sm font-bold"}>Not registered yet? Create an account</small>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
