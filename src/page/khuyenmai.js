import Header from "../components/header";
const khuyenmai = {
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
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="./src/img/tin2.jpg" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-800">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Redmi Note 11S lên kệ độc quyền tại FPT Shop, tặng ưu đãi đến 900.000 đồng
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">
                                Từ ngày 18/02 - 24/02/2022, Redmi Note 11S bản 6GB - 128GB chính thức lên kệ độc quyền tại FPT Shop toàn quốc với giá 6.190.000 triệu đồng. Chọn mua sản phẩm, bạn không chỉ được giảm ngay 300.000 đồng, tặng tai nghe Redmi Buds 3 Lite trị giá 590.000 đồng mà còn được thêm nhiều ưu đãi thiết thực khác chỉ có tại FPT Shop.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="./src/img/tin3.png" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-800">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Giá sốc cuối tuần, FPT shop giảm đến 8 triệu
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">
                                Từ ngày 18 – 20/02, khách hàng chọn mua các sản phẩm công nghệ tại FPT Shop sẽ được giảm giá đến 8 triệu và miễn phí giao hàng toàn quốc.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="./src/img/tin4.jpeg" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-800">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Galaxy S22 Ultra – chiếc ‘Note mới’ chiếm tỉ lệ đặt mua áp đảo tại FPT Shop
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">
                                Sau 7 ngày mở chương trình đặt trước Galaxy S22 Series tại FPT Shop, có đến 82% khách hàng chọn phiên bản S22 Ultra. Từ nay đến ngày 03/3, FPT Shop tiếp tục tặng ưu đãi đến 6 triệu đồng cho khách hàng đặt trước siêu phẩm Galaxy S22 Series tại hệ thống.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
};
export default khuyenmai;