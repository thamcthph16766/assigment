const Header = {
    render(){
        return /*html*/ `
        <header>
            <div class="min-h-full">
                <nav class="bg-red-700">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="./src/img/logo.png" alt="">
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <a href="/" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Trang chủ</a>
                    
                                    <a href="/khuyenmai" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Khuyến mại</a>

                                    <a href="/gioithieu" class="text-white hover:text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Giới thiệu</a>
                    
                                    <a href="/dashboard" class="text-white hover:text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Admin</a>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                            <span class="hidden sm:block ml-3">
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                                
                                <a href="/sign_in"> Sign-in </a>
                                </button>
                            </span>
                        
                            <span class="sm:ml-3">
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                                <a href="/sign_up"> Sign-up </a>
                                </button>
                            </span>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </nav>

                
            </div>
        </header>
        `;
    },
};
export default Header;