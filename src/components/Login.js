import Header from "./Header"

const Login = () => {
    return (
        <div className="relative">
            <Header />
            <div>
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                    alt='background' />
            </div>
            <div className="flex justify-center text-white">
                <form className="bg-black absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col w-[350px] px-[50px] py-[50px] opacity-[.85] rounded-md">
                    <span className="text-xl font-bold p-2">Sign in</span>
                    <input type="text" placeholder="Email Address" className="p-2 m-2 rounded-md bg-gray-600 px-4"/>
                    <input type="password" placeholder="Password" className="p-2 m-2 rounded-md bg-gray-600 px-4"/>
                    <button className="p-2 m-2 mt-4 bg-red-600 rounded-md w-58">Sign in</button> 
                    <div className="p-2" >
                        <input type="checkbox" id="rememberMe" className=" bg-gray-600 mr-2"/>
                        <label for="rememberMe">Remember me</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login