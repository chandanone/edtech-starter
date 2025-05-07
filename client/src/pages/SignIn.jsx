import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export default function SignIn(){
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    return (
         <Card variant="outlined" style={{width: 400, padding: 20, margin: 100, display: "flex", flexDirection: "column", gap: 15}}>
            <TextField variant="outlined" id="username" label="Username" onChange={(e)=>{
                setUsername(e.target.value)
            }}>Username</TextField>
            <TextField variant="outlined" id="password" label="Password" onChange={(e)=>{
                setPassword(e.target.value)
            }}>Password</TextField>
            <div style={{ display: "flex", gap: 10}}>
                <Button variant="contained" style={{ width: 100}} onClick={()=> {

                    fetch("http://localhost:3000/admin/login",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username,
                            password
                        })
                    })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data.token) 
                        localStorage.setItem("token", data.token)
                        window.location = "/home"
                    })
                    .catch((error) => {
                        console.error("Username and password not found:", error)
                    })
                    
                }}>Sign In</Button>
                
            </div>
            
        </Card>
    )
}