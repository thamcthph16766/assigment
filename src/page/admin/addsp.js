import adminNav from "./adminNav";
import axios from "axios";
import { add } from "../../../src/api/product";
import Dashboard from "./dashboard";
import qlsanpham from "./qlsanpham";

const addsp = {
    render(){
        return /*html*/ `

        ${adminNav.render()}

            <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add-post" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                
    
                <div>
                    <label for="about" class="block text-sm font-medium text-gray-500"> Tiêu đề </label>
                        <div class="mt-1">
                        <textarea  id="name-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-500 rounded-md">
                        </textarea>
                        </div>
                    </div>
                    <label for="about" class="block text-sm font-medium text-gray-500"> Giá sản phẩm</label>
                        <div class="mt-1">
                        <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-500 rounded-md"></textarea>
                        </div>
                    </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700"> Hình ảnh </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                        <div class="w-3xl grid grid-cols-2 gap-8">
                        <div><input type="file" class="border border-black" id="img-post" /></div>
                        <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                    </div>
                        </label>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Thêm</button>
                </div>
            </div>
            </form>
        </div>
        `;
  },
  afterRender() {
    const formAdd = document.querySelector("#form-add-post");
    const imgPreview = document.querySelector("#img-preview");
    const imgPost = document.querySelector("#img-post");
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fptpoly/image/upload";
    const CLOUDINARY_PRESET = "WEB16309";

    formAdd.addEventListener("submit", async function (e) {
        e.preventDefault();
        const file = imgPost.files[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);
        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
            headers: {
                "Content-Type": "application/form-data"
            }
        })
        add({
            name: document.querySelector("#name-post").value,
            img: data.url,
            desc: document.querySelector("#desc-post").value,
        })
        .then(
            () => {
                window.location.href = "/qlsanpham";
            },
        )
        ;
        
    });
  },
};
export default addsp;