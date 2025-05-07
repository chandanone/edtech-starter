import {Box, Grid, Typography} from "@mui/material"
import AddCourse from "./AddCourse"

export default function Home() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Typography variant="h6" style={{marginTop: 100, marginLeft: 50 ,fontSize: 50, fontWeight: "bolder", color: "tomato"}}>
                            Hi, Welcome to high on devops platform
                        </Typography>    
                        <Typography variant="h6" style={{marginTop: 20, marginLeft: 50 ,fontSize: 50, fontWeight: "bolder", color: "tomato"}}>
                            Create and manage course asap.
                        </Typography>          
                    </Grid>
                    <Grid size={6}>
                        <AddCourse />
                    </Grid>
                </Grid>
            </Box>            
        </div>
    )
}