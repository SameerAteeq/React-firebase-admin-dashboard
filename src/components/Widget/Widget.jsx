import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./widget.scss";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
const Widget = ({ type }) => {

    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null)

    let data;
    if (type === "users") {
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            query: "users",
            icon: (< PersonOutlined className="icon" style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
            }} />)
        }
    } else if (type === "orders") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "view all orders",
            icon: (< ShoppingCartOutlined className="icon" style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
            }} />)
        }
    } else if (type === "earnings") {
        data = {
            title: "EARNING",
            isMoney: true,
            link: "view net earnings",
            icon: (< MonetizationOnOutlined className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />)
        }
    } else if (type === "balance") {
        data = {
            title: "MY BALANCE",
            isMoney: true,
            link: "See details",
            icon: (< AccountBalanceWalletOutlined className="icon" style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
            }} />)
        }
    } else {
        console.log('data is undefined')
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

            const lastMonthQuery = query(collection(db, "users"),
                where("timeStamp", "<=", today),
                where("timeStamp", ">", lastMonth)
            );
            const prevMonthQuery = query(collection(db, "users"),
                where("timeStamp", "<=", lastMonth),
                where("timeStamp", ">", prevMonth)
            );

            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);

            setAmount(lastMonthData.docs.length);
            console.log(setAmount)
            setDiff(
                ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100);
        };
        fetchData();
    }, [])
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget