import {Link} from "react-router-dom" 

function Appbar() {
    return (
        <div className="head" style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "150px",
            marginRight: "150px",
            marginBottom: "20px",
            fontSize: 20
        }}>
            <div className="logo">
                <Link style={{ textDecoration: "none"}} to="/">DevOps Crow</Link>
            </div>
            <div className="nav" style={{
                display: "flex",
                gap: 100,
            }}>
                <Link style={{ textDecoration: "none"}} to="/about">About</Link>
                <Link style={{ textDecoration: "none"}} to="/courses">Courses</Link>
                <Link style={{ textDecoration: "none"}} to="/contact">Contact Us</Link>
            </div>
        </div>
    )
} 

export default Appbar