const adminNav = {
    render(){
        return /*html*/ `
                    <div class="max-w-7xl mx-auto px-4 sm:px-6">
                        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div class="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <img class="h-8 w-auto sm:h-10" src="../src/img/logo.png" alt="">
                            </a>
                            <div class="-mr-2 -my-2 md:hidden">
                                <nav class="hidden md:flex space-x-10">
                                    <div class="ml-10 flex items-baseline space-x-4">
                        
                                        <a href="" class="text-red-600 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Quản lý khuyến mại</a>

                                        <a href="" class="text-red-600 hover:text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Thống kê</a>
                        
                                        <a href="/" class="text-red-600 hover:text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Xem trang chủ</a>
                                    </div>
                                </nav>
                            </div>
                            </div>
                            
                        </div>
                    </div>
        `;
    },
};
export default adminNav;