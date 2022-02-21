const adminNav = {
    render(){
        return /*html*/ `
        <div class="relative bg-white">
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-4 gap-y-4 gap-x-8">
              <a href="/">
                <img class="h-8 w-auto sm:h-10" src="../src/img/logo.png" alt="">
              </a>
      
                <a href="/qlsanpham" class="text-base font-medium text-gray-900 hover:text-gray-700"> Quản lý sản phẩm </a>
      
                <a href="/qlkhuyenmai" class="text-base font-medium text-gray-900 hover:text-gray-700"> Quản lý khuyến mại </a>
      
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Thành viên </a>
            </div>
        </div>
        `;
    },
};
export default adminNav;