const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const db = require("./pool");
const queries = require("./queries");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/create-blog", queries.createBlog);

app.get("/get-blogs", queries.getBlogs);

app.put("/edit-blog/:id", queries.editBlog);

app.delete("/delete-blog/:id", queries.deleteBlog);

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
