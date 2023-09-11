import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./Create.css";

const Create = () => {
	const api = useContext(AppContext);
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const createBlog = () => {
		api.post("/create-blog", formData).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className='create-blog-container'>
			<Link
				to='/Blogs'
				className='back'
			>
				Back to Home
			</Link>
			<div className='create--blog--form--container'>
				<label
					htmlFor='title'
					className='title-label'
				>
					Title
				</label>
				<input
					type='text'
					className='title-input'
					onChange={(e) =>
						setFormData({ ...formData, title: e.target.value })
					}
				/>
				<label
					htmlFor='content'
					className='content-label'
				>
					Content
				</label>
				<textarea
					name='content'
					className='content-input'
					onChange={(e) =>
						setFormData({ ...formData, content: e.target.value })
					}
				></textarea>
				<Link to='/Blogs'>
					<button
						disabled={!formData.content || !formData.title}
						className='create-blog-button'
						onClick={() => createBlog()}
					>
						Create Blog
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Create;
