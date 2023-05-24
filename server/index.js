const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({
    "publicFeedback": [
        {   
            "id":1,
            "picture": "https://lh3.googleusercontent.com/a/AGNmyxaLiucHDMf3XiVesziASwpWUbO9D1dNIcrXq39O=s96-c",
            "name": "User name",
            "stars": 4,
            "feedback" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac"
        },
        {
            "id":2,
            "picture": "https://lh3.googleusercontent.com/a/AGNmyxaLiucHDMf3XiVesziASwpWUbO9D1dNIcrXq39O=s96-c",
            "name": "User name",
            "stars": 4,
            "feedback" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. "
        },
        {
            "id":3,
            "picture": "https://lh3.googleusercontent.com/a/AGNmyxaLiucHDMf3XiVesziASwpWUbO9D1dNIcrXq39O=s96-c",
            "name": "User name",
            "stars": 4,
            "feedback" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl."
        },
        // {
        //     "id":4,
        //     "picture": "https://lh3.googleusercontent.com/a/AGNmyxaLiucHDMf3XiVesziASwpWUbO9D1dNIcrXq39O=s96-c",
        //     "name": "User name",
        //     "stars": 4,
        //     "feedback" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu orci, commodo ut vestibulum et, imperdiet ac lorem. Suspendisse ac aliquam nisl. Nulla id quam sit amet lectus porttitor convallis ac"
        // }
    ]
});
});


// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
