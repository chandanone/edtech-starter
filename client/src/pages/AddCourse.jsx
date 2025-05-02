import { Button, Card, TextField } from "@mui/material"
import { useState } from "react"

function AddCourse(){
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Card variant="outlined" style={{width: 400, padding: 20, display: "flex", flexDirection: "column", gap: 15}} >
                <TextField fullWidth={true} label="Title" variant="outlined" onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <TextField fullWidth={true} label="Description" variant="outlined" onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <Button variant="outlined" onClick={()=> {
                    fetch("http://localhost:3000/admin/courses",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer "+localStorage.getItem("token")
                        },
                        body: JSON.stringify({
                            title,
                            description,
                            imageLink: "",
                            published: true
                        })
                    })
                }}>ADD COURSE</Button>
            </Card>
        </div>
    )
}

export default AddCourse