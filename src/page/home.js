import Header from "../components/header";
import banner from "../components/banner";
import sanpham from "../page/sanpham";
const Home = {
    render(){
        return /*html*/`
        
        ${Header.render()}
        ${banner.render()}

        <main >
          <div class="bg-white border-solid border border-white rounded-lg">
            <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
              <div>
                <h2 class="text-3xl font-extrabold tracking-tight text-red-700 sm:text-4xl">KHUYẾN MẠI HOT</h2>
                <p class="mt-4 text-gray-500">Siêu sale nhân dịp cuối năm cho mọi khách hàng trên toàn quốc đến với FPT Shop quà tặng giá trị
                  hoặc vocher hấp dẫn đang chào đón quý khách hàng, đầu năm nhận lì xì ngay cùng với FPT Shop, cơ hội trúng Iphone 13.
                </p>
          
                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Iphone 13 Pro Max 128GB</dt>
                    <dd class="mt-2 text-sm text-gray-500">Giảm thêm 500.000đ cho iPhone khi thanh toán qua VNPAY</dd>
                  </div>
          
                  <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Samsung Galaxy S22 Ultra 5G 128GB</dt>
                    <dd class="mt-2 text-sm text-gray-500">Tặng PMH trị giá 4.000.000đ</dd>
                  </div>
          
                  <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Xiaomi Redmi Note 11 4GB - 128GB</dt>
                    <dd class="mt-2 text-sm text-gray-500">Giảm ngay 5% tối đa 500.000đ khi thanh toán qua ví Moca trên ứng dụng Grab</dd>
                  </div>
          
                  <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">OPPO A94 8GB-128GB</dt>
                    <dd class="mt-2 text-sm text-gray-500">Giảm thêm 300.000đ cho ĐTDĐ trên 6 triệu khi thanh toán qua VNPAY</dd>
                  </div>
                </dl>
              </div>
              <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img src="./src/img/iphone13.jpg" alt="iPhone 13 Pro Max xứng đáng là một chiếc iPhone lớn nhất, mạnh mẽ nhất và có thời lượng pin dài nhất từ trước đến nay sẽ cho bạn trải nghiệm tuyệt vời, từ những tác vụ bình thường cho đến các ứng dụng chuyên nghiệp." class="bg-gray-100 rounded-lg">
                <img src="./src/img/samsung.webp" class="bg-gray-100 rounded-lg">
                <img src="./src/img/xiaomi.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg">
                <img src="./src/img/oppo.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg">
              </div>
            </div>
            ${sanpham.render()}

        </div>
          
        </main>
      </div>
        `;
    },
};
export default Home;