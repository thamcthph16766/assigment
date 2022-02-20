import Header from "../components/header";
const chitietkm = {
    render(){
        return /*html*/`
        
        ${Header.render()}
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">TIN KHUYẾN MẠI</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="./src/img/tin1.png" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-800">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Tech Offline: Trải nghiệm Galaxy S22 Series cùng FPT Shop
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">
                                Vào lúc 17h ngày 20/02/2022, FPT Shop sẽ tổ chức sự kiện trải nghiệm siêu phẩm mới Galaxy S22 Series dành cho các bạn Samfan tại TP.HCM với quà tặng vô cùng hấp dẫn, gồm có: Galaxy S22 Ultra, tai nghe Galaxy Buds2, đế sạc đôi không dây Samsung, bộ cáp sạc 45W,..
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    
        `;
    },
};
export default chitietkm;