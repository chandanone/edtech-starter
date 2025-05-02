import { Box, Button, ButtonBase, Card, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div style={{
            width: "100%",
            backgroundColor: "#fbe9e7"
        }}>            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}  style={{padding: "10px"}}>
                        <Typography variant='h4' style={{
                            marginTop: "150px", display: "flex", justifyContent: "center", alignContent: "center"
                        }}>
                            Welcome to the DevOps Crown. <br/>SignIn to get access.
                        </Typography>
                    </Grid>
                    <Grid size={6}  style={{ display: "flex", flexDirection: "column" ,gap:10,marginTop: "150px"}}>
                        <TextField id='email' label="Email" variant='outlined' onChange={(e)=> {setEmail(e.target.value)}}/>
                        <TextField id='password' label="Password" variant='outlined' onChange={(e)=> {setPassword(e.target.value)}} />                        
                        <Button variant='outlined' style={{width: 100}} onClick={() => {
                            // let username = document.getElementById("username").value;
                            // let password = document.getElementById("password").value;
                             
                            fetch("http://localhost:3000/admin/login",{
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    email,
                                    password
                                })
                            })
                            .then(res => res.json())
                            .then((data) =>{ 
                                console.log(data)
                                localStorage.setItem("token", data.token)
                            })                           
                        }}>Sign In</Button> 
                                              
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


export default SignIn