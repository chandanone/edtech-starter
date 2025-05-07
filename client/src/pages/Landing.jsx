import {Box, Grid, Typography} from "@mui/material"
import SignIn from "./SignIn"

export default function Landing() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Typography variant="h6" style={{marginTop: 120, marginLeft: 50 ,fontSize: 50, fontWeight: "bolder", color: "tomato"}}>Welcome to high on devops platform</Typography>         
                    </Grid>
                    <Grid size={6}>
                        <SignIn />
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}