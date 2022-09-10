import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TableList from "../../components/table/Table";
import Widget from "../../components/Widget/Widget";
import "./home.scss";

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts-container">
                    <Featured />
                    <Chart title="Last Month (Revenue)" aspect={2 / 1} />
                </div>
                <div className="list-container">
                    <div className="listTitle">Latest Transaction</div>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Home
