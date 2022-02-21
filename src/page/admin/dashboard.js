
import qlsanpham from "./qlsanpham";

const Dashboard = {
    async render(){
        return /*html*/ `
        ${await qlsanpham.render()}
        `;
    },
};
export default Dashboard;