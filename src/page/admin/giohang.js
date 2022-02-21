import toastr from "toastr";

import Header from "../../components/header";
// import addHome from "./add";
import "toastr/build/toastr.min.css";
import { getAll, remove } from "../../api/cart";
import { removeItem } from "../../utils/cart";
import { reRender } from "../../utils";

const giohang = {
    
  render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    return/* html */ `
        ${Header.render()}
        <div class="rounded-md shadow">
              <a href="/addkm" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">Giỏ hàng</a>
            </div>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn hàng</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" class="relative px-6 py-3">
                      <button class="btn btn-remove sr-only">Delete</button>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${cart.map((item) => /* html */`
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img id="${item.img}" class="h-10 w-10 rounded-full" src="" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${item.desc}</div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <div class="buttons_added">
                        <input data-id="${item.id}" class=" btn btn-decrease " type="button" value="-">
                        <input  aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="${item.quantity}">
                        <input data-id="${item.id}" class="btn btn-increase " type="button" value="+">
                        
                        
                        
                      </div>
                    </td>
                        </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <button data-id="${item.id}" class="btn btn-remove text-sm font-medium text-gray-900">Xóa</button>
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> `;
    },
    
    afterRender() {
      const btns = document.querySelectorAll(".btn");
      btns.forEach((btn) => {
          const { id } = btn.dataset;
          btn.addEventListener('click', () => {
            const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
            if(confirm){
              removeItem(id, ()=> {
                reRender(giohang, "#app")
                toastr.success("Bạn đã xóa thành công");
                })
            }
        })
      });
  },
};
export default giohang;