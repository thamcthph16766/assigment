import Header from "../components/header";
import {getAll} from "../api/posts";
const khuyenmai = {
    async render(){
        const { data } = await getAll();
        return /*html*/`
        
        ${Header.render()}
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">TIN KHUYẾN MẠI</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div class="group relative">
                    ${data.map((pro) =>/*html */ `
                    <a href="/khuyenmai/${pro.id}">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="${pro.img}" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-800">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        ${pro.name}
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">
                                ${pro.desc}
                                </p>
                                
                            </div>
                        </div>
                    </a>
                    `).join("")}
                </div>
            </div>
        </div>
        `;
    },
};
export default khuyenmai;