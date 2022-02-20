import Navigo from "navigo";
import Home from "../src/page/home";
import khuyenmai from "../src/page/khuyenmai";
import gioithieu from "../src/page/gioithieu";
import dashboard from "../src/page/admin/dashboard";
import chitietkm from "./page/chitietkm";
import chitietsp from "./page/chitietsp";
import sanpham from "./page/sanpham";
import sign_in from "./page/sign_in";
import sign_up from "./page/sign_up";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => print(Home),
    "/sanpham": () => print(sanpham),
    "/sanpham/:id": ({ datasp }) => print(chitietsp, datasp.id),
    "/khuyenmai": () => print(khuyenmai),
    "/khuyenmai/:id": () => print(chitietkm),
    "/gioithieu": () => print(gioithieu),
    "/dashboard": () => print(dashboard),
    "/sign_in": () => print(sign_in),
    "/sign_up": () => print(sign_up),
    
});

router.resolve();