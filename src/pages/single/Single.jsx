import "./single.scss";
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import TableList from "../../components/table/Table";
const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editBtn">Edit</div>
                        <h3 className="title">Information</h3>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    John Doe
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Job Title:</span>
                                    <span className="itemValue">Frontend Developer</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">Johndoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">91+ 2344556955</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart title="Last 6 Months (spending)" aspect={4 / 1} />
                    </div>
                </div>
                <div className="bottom">
                    <h3 className="title">Last Transaction</h3>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Single