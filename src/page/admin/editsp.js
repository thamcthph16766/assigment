import axios from "axios";
import { get, update } from "../../api/product";
import adminNav from "../admin/adminNav";

const edit = {
    async  render(id) {
        const { data } = await get(id);

        return /* html */`
            
            ${adminNav.render()}

            <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-edit" method="POST">
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
                        <textarea  id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-500 rounded-md"></textarea>
                        </div>
                    </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700"> Hình ảnh </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                        
                        <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                        <div class="w-3xl grid grid-cols-2 gap-8">
                        <div><input type="file" class="border border-black" id="img-post" /></div>
                        <div><img id="img-preview" src="${data.img}" width="200px"/></div>
                    </div>
                        </label>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sửa</button>
                </div>
            </div>
            </form>
        </div>`;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const newImage = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fptpoly/image/upload";
        const CLOUDINARY_PRESET = "WEB16309";
        let newImageLink = "";
        newImage.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = newImage.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });

                newImageLink = data;
            }
            update({
                id,
                name: document.querySelector("#name-post").value,
                img: newImageLink ? newImageLink.url : newImage.src,
                desc: document.querySelector("#desc-post").value,
            })
            setTimeout(() => {
                if (update) {
                    window.location.href = "/qlsanpham";
                } else {
                    console.log("sửa")
                }
            }, 1000);
        });
    },
};
export default edit;