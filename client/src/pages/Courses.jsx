import { Card, Box, Grid, } from "@mui/material";
import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
        setLoading(false); // Set loading to false after successful data fetch
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError(error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [setCourses]);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Added Grid item with md={4} */}
              <Card
                sx={{
                  padding: 2,
                  margin: 5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  height: '70%', // Make cards take up full height of the grid item
                }}
              >
                <div>Title: {course.title}</div>
                <div>Description: {course.description}</div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

