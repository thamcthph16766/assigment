import Navigo from "navigo";
import Home from "../src/page/home";
import khuyenmai from "../src/page/khuyenmai";
import gioithieu from "../src/page/gioithieu";
import dashboard from "../src/page/admin/dashboard";
import chitietsp from "./page/chitietsp";
import sanpham from "./page/sanpham";
import sign_in from "./page/sign_in";
import sign_up from "./page/sign_up";
import qlsanpham from "./page/admin/qlsanpham";
import addsp from "./page/admin/addsp";
import edit from "./page/admin/editsp";
import qlkhuyenmai from "./page/admin/qlkhuyenmai";
import giohang from "./page/admin/giohang";
import thanhvien from "./page/admin/thanhvien";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};


router.on({
    "/": () => print(Home),
    "/sanpham": () => print(sanpham),
    "/sanpham/:id": ({ data }) => print(chitietsp, data.id),
    "/khuyenmai": () => print(khuyenmai),
    "/gioithieu": () => print(gioithieu),
    "/dashboard": () => print(dashboard),
    "/sign_in": () => print(sign_in),
    "/sign_up": () => print(sign_up),
    "/qlsanpham": () => print(qlsanpham),
    "/addsp": () => print(addsp),
    "/admin/qlsanpham/:id/edit": ({ data }) => print(edit, data.id),
    "/qlkhuyenmai": () => print(qlkhuyenmai),
    "/giohang": () => print(giohang),
    "/thanhvien": () => print(thanhvien),
    
});

router.resolve();