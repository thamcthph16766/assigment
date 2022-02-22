import { getAll, remove } from "../../api/user";
import adminNav from "./adminNav";
import { reRender } from "../../utils";
const thanhvien = {
    async render(){
        
            const { data } = await getAll();
        return /*html*/ `
        
        ${adminNav.render()}
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tài khoản</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" class="relative px-6 py-3">
                      <button class="btn btn-remove sr-only">Delete</button>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                ${data.map((post) => /*html */ `
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${post.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${post.username}</div>
                        </div>
                        
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <button class="text-sm font-medium text-gray-900">Xóa</button>
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
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
                if(confirm){
                    remove(id).then(() => {
                        console.log('Xóa thành công');
                    })
                }
            })
        });
    }
}
export default thanhvien;