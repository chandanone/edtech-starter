import { Typography } from "@mui/material";
import { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") 
    return (
        <div style={{
            border: "2px solid black", width: 400, marginTop: 150,marginLeft: 450,
            padding: 10, display: "flex",flexDirection: "column", gap: 5
        }}>            
        <Typography variant="h6">Welcome to Devops Crown</Typography>
            <input type="text" id="usernameInput" placeholder="email" onChange={(e)=> { setEmail(e.target.value)}} /> <br />
            <input type="password" id="passwordInput" placeholder="password" onChange={(e)=> { setPassword(e.target.value)}} />
            <br />
            <button style={{ width: 100}} onClick={() => {
                // let username = document.getElementById("usernameInput").value;                
                // let password = document.getElementById("passwordInput").value;
                //  console.log("Username:", username);
                //  console.log("Password:", password);
                fetch("http://localhost:3000/admin/signup", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                })
            }}>
                Sign Up
            </button>
        </div>
    )
}

export default SignUp