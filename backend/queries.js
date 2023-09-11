const db = require("./pool");

const createBlog = (req, res) => {
	const { title, content } = req.body;
	db.query(
		"INSERT INTO blog (title, content) VALUES ($1, $2)",
		[title, content],
		(err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send("Error creating the blog");
			} else {
				res.status(200).send("Blog created successfully");
			}
		}
	);
};

const getBlogs = (req, res) => {
	db.query("SELECT * FROM blog ORDER BY id ASC", (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error fetching blogs");
		} else {
			res.status(200).json(result.rows);
		}
	});
};

const editBlog = (req, res) => {
	const { id, title, content } = req.body;
	db.query(
		"UPDATE blog SET title = $1, content = $2 WHERE id = $3",
		[title, content, id],
		(err, result) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error updating blog");
			} else {
				res.status(200).send("Blog updated successfully");
			}
		}
	);
};

const deleteBlog = (req, res) => {
	const id = req.params.id;

	db.query("DELETE FROM blog WHERE id = $1", [id], (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error deleting blog");
		} else {
			res.status(200).send("Blog deleted successfully");
		}
	});
};

module.exports = { getBlogs, createBlog, editBlog, deleteBlog };
