import { Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import { backendBaseUrl } from "../../../../constants/constants";
import { useTheme } from "@mui/material/styles";

function WriteBlogs() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const writeANewBlog = async () => {
    try {
      const request = await fetch(backendBaseUrl + "api/v1/blogs/newblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Title",
          description: "test",
        }),
        credentials: "include",
      });

      const response = await request.json();

      return console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-required"
          label="Title"
          sx={{ marginBottom: "20px", width: isMatch ? "500px" : "270px" }}
        />{" "}
        <TextField
          label="Write about it"
          multiline
          maxRows={isMatch ? 20 : 5}
          sx={{
            height: isMatch ? "600px" : "100px",
            width: isMatch ? "800px" : "300px",
          }}
        />
        <Button
          variant="outlined"
          sx={{ width: "250px", height: "50px" }}
          onClick={() => writeANewBlog()}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default WriteBlogs;
