import { Button, Card, Link, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function AppBar() {
    const [userEmail, setUserEmail] = useState(null)

    useEffect(()=> {
       fetch("http://localhost:3000/admin/me",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("token")
                }
        })
        .then(res => res.json())
        .then((data)=> {
            if (data.username) {
                setUserEmail(data.username)            
            }
        })               
    },[])

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 20,
        }}>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>
                <Button style={{ textDecoration: "none", fontSize: 20, fontWeight: "bold", fontFamily: "cursive", color: "tomato" }}>High On Devops</Button>
            </div>
            <div style={{
                display: "flex",
                gap: 5
            }}>
                {userEmail ? (
                    <>
                        <span>{userEmail}</span>
                        <Button variant="contained" onClick={() => {
                            localStorage.setItem("token", null)
                            window.location = "/"
                        }}>Sign Out</Button>
                    </>
                ) : (
                    <>
                        <Button variant="contained" onClick={() => {
                            window.location = "/signup"
                        }}>Sign Up</Button>
                        <Button variant="contained" onClick={() => {
                            window.location = "/"
                        }}>Sign In</Button>
                    </>
                )} 
            </div>
        </div>
    );
}



