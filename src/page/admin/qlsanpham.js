import { getAll, remove } from "../../../src/api/product";
import adminNav from "./adminNav";
import { reRender } from "../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const qlsanpham = {
    async render(){
        
            const { data } = await getAll();
        return /*html*/ `
        
        ${adminNav.render()}
        <div class="rounded-md shadow">
              <a href="/addsp" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">Thêm sản phẩm</a>
            </div>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" class="relative px-6 py-3">
                      <button class=" sr-only">Delete</button>
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <button class="sr-only"><a href="/editsp">Edit</button>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                ${data.map((post) => /*html */ `
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${post.name}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${post.desc}</div>
                        </div>
                        
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <button data-id=${post.id}  class="btn btn-remove text-sm font-medium text-gray-900">Xóa</button>
                        </div>
                        
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <a href="/admin/qlsanpham/${post.id}/edit"><button class=" text-sm font-medium text-gray-900">Sửa</button>
                        </a>
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
      </div>
      `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn')
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
                if(confirm){
                  remove(id).then(() => {
                    toastr.success("Bạn đã xóa thành công");
                }).then(() => {
                    reRender(qlsanpham, "#app");
                    })
                }
            })
        });
    }
}
export default qlsanpham;