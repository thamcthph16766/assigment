
import qlsanpham from "./qlsanpham";

const Dashboard = {
    render(){
        return /*html*/ `
        ${qlsanpham.render()}
        `;
    },
};
export default Dashboard;