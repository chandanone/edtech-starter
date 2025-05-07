import { Box, Button, Card, TextField, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function SignUp(){
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null) 
     return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Typography variant="h6" style={{marginTop: 120, marginLeft: 50 ,fontSize: 50, fontWeight: "bolder", color: "tomato"}}>
                            Welcome to high on devops platform. Sign Up to get full access to courses. 
                        </Typography>         
                    </Grid>
                    <Grid size={6}>
                        <Card variant="outlined" style={{width: 400, padding: 20, margin: 100, display: "flex", flexDirection: "column", gap: 15}}>
                            <TextField variant="outlined" id="username" label="Username" onChange={(e)=> {
                                setUsername(e.target.value)
                            }}>Username</TextField>
                            <TextField variant="outlined" id="password" label="Password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }}>Password</TextField>
                            <div style={{ display: "flex", gap: 10}}>
                                <Button variant="contained" style={{ width: 100}} onClick={()=> {
                                    fetch("http://localhost:3000/admin/signup",{
                                        method:"POST",
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
                                        console.log(data)
                                    })
                                    
                                }}>Sign Up</Button>
                            </div>
                            
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}

