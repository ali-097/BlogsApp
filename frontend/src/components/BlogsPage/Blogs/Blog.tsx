import "./Blog.css";

interface blogs {
	blog: {
		id: number;
		title: string;
		content: string;
	};
	deleteBlog: (id: number) => void;
	editBlog: (id: number) => void;
}

const Blogs = (props: blogs) => {
	return (
		<div
			className='blog-container'
			key={props.blog.id}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "1rem",
				}}
			>
				<h1 className='blog-title'>{props.blog.title}</h1>
				<div className='blog-button-container'>
					<button
						className='blog-button edit-blog-button'
						onClick={() => props.editBlog(props.blog.id)}
					>
						Edit blog
					</button>
					<button
						className='blog-button delete-blog-button'
						onClick={() => props.deleteBlog(props.blog.id)}
					>
						Delete blog
					</button>
				</div>
			</div>
			<p className='blog-content'>{props.blog.content}</p>
		</div>
	);
};

export default Blogs;
