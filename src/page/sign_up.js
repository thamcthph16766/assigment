import { signup } from "../api/user";
const sign_up = {
    render(){
        return /*html*/ `
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form id="formSignup" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div>
                            <img class="mx-auto h-12 w-auto" src="../src/img/logo.png" alt="Workflow">
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                        </div>
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" id="username" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password"  id="password"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="email" id="email"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                    </div>
                    <button  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                
                    Sign up
                    </button>
                </form>
            </div>
            `
        },
        afterRender(){
            const formSignup = document.querySelector('#formSignup');
            formSignup.addEventListener('submit', function(e){
                e.preventDefault();
                signup({
                    username: document.querySelector('#username').value,
                    password: document.querySelector('#password').value,
                    email: document.querySelector('#email').value
                })
            });
        }
    }
    export default sign_up;