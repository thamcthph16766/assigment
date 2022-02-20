import adminNav from "./adminNav";
import qlkhuyenmai from "./qlkhuyenmai";
const Dashboard = {
    render(){
        return /*html*/ `
        ${adminNav.render()}
        ${qlkhuyenmai.render()}
        `;
    },
};
export default Dashboard;