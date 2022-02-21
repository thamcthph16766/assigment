import { signin } from "../api/user";

const sign_in = {
    render(){
        return /*html*/ `
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
            <img class="mx-auto h-12 w-auto" src="../src/img/logo.png" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
            </div>
            <form id="formSignin" class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email" type = "email"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                </div>
                <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" type="password"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                </div>
            </div>
            <div>
                <button  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                
                Sign in
                </button>
            </div>
            </form>
        </div>
        </div>
        
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async function(e){
            e.preventDefault();
            const response = await signin({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            })
            localStorage.setItem("user", JSON.stringify(response.data.user))
            if(response.data.user.id === 1) {
                document.location.href="/sanpham"
            } else {
                document.location.href="/"
            }
        });
    }
}
export default sign_in;