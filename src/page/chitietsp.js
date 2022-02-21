import Header from "../components/header";
import {get} from "../api/product";

const chitietsp = {
    async render(id){
        const { data } = await get(id);
        return /*html*/ `
        ${Header.render}

        <div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
            <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
                <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>

                <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>

                <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>

                    <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                        <img src="${data.img}" alt="Two each of gray, white, and black shirts arranged on table." class="object-center object-cover">
                    </div>
                    <div class="sm:col-span-8 lg:col-span-7">
                        <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">${data.name}</h2>

                        <section aria-labelledby="information-heading" class="mt-2">
                        <h3 id="information-heading" class="sr-only"></h3>

                        <p class="text-2xl text-gray-900">${data.desc}</p>


                        <section aria-labelledby="options-heading" class="mt-10">
                        <p id="options-heading" class="sr-only">${data.price}</p>


                        </section>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        `;
    },
};
export default chitietsp;