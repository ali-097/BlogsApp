import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import Blog from "./Blogs/Blog";
import "./BlogsPage.css";
import EditModal from "./EditModal/EditModal";

interface Blog {
	id: number;
	title: string;
	content: string;
}

const Home = () => {
	const [blogData, setBlogData] = useState({
		id: 0,
		title: "",
		content: "",
	});
	const [modal, setModal] = useState<boolean>(false);
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const api = useContext(AppContext);

	useEffect(() => {
		api.get("/get-blogs").then((res) => {
			setBlogs(res.data);
		});
	}, [blogs, api]);

	const deleteBlog = (id: number) => {
		api.delete(`/delete-blog/${id}`).then((res) => {
			console.log(res);
		});
	};

	const editBlog = (id: number) => {
		setModal(true);
		setBlogData({ ...blogData, id: id });
	};

	const send = () => {
		api.put(`/edit-blog/${blogData.id}`, blogData).then((res) => {
			console.log(res);
		});
		setBlogData({ id: 0, title: "", content: "" });
		setModal(false);
	};

	const allBlogs = blogs.map((blog) => {
		return (
			<Blog
				key={blog.id}
				blog={blog}
				deleteBlog={deleteBlog}
				editBlog={editBlog}
			/>
		);
	});

	return (
		<>
			{modal && (
				<EditModal
					setModal={setModal}
					blogData={blogData}
					setBlogData={setBlogData}
					send={send}
				/>
			)}
			<Link
				to='/create'
				className='create-blog'
			>
				Create Blog
			</Link>
			<div className='blogs-container'>{allBlogs}</div>
		</>
	);
};

export default Home;
