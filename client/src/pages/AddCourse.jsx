import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export default function AddCourse() {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    return (
        <Card variant="outlined" style={{width: 400, padding: 20, margin: 100, display: "flex", flexDirection: "column", gap: 15}}>
            <TextField variant="outlined" id="title" label="Title" onChange={(e)=> {
                setTitle(e.target.value)
            }}>Title</TextField>
            <TextField variant="outlined" id="description" label="Description" onChange={(e)=>{
                setDescription(e.target.value)
            }}>Description</TextField>
            <div style={{ display: "flex", gap: 10}}>
                <Button variant="contained" style={{ width: 100}} onClick={()=> {
                    
                    fetch("http://localhost:3000/admin/courses",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer "+localStorage.getItem("token")
                        },
                        body: JSON.stringify({
                            title,
                            description
                        })
                    })
                    .then((res) => res.json())
                    .then((data)=> {
                        console.log(data)
                        window.location = "/courses"
                    })
                }}>Add Course</Button>
            </div>
            
        </Card>
    )
}