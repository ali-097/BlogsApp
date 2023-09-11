import { useEffect } from "react";
import "./EditModal.css";

interface Props {
	setModal: (modal: boolean) => void;
	blogData: {
		id: number;
		title: string;
		content: string;
	};
	setBlogData: (blogData: {
		id: number;
		title: string;
		content: string;
	}) => void;
	send: () => void;
}

const EditModal = (props: Props) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);
	return (
		<>
			<div
				className='edit-modal-body'
				onClick={() => props.setModal(false)}
			>
				<div
					className='edit-modal-container'
					onClick={(e) => e.stopPropagation()}
				>
					<h1
						className='edit-modal-close'
						onClick={() => props.setModal(false)}
					>
						✖
					</h1>
					<div className='edit-form'>
						<input
							type='text'
							placeholder='Title'
							className='edit-form-title'
							value={props.blogData.title}
							onChange={(e) =>
								props.setBlogData({
									...props.blogData,
									title: e.target.value,
								})
							}
						/>
						<textarea
							placeholder='Content'
							value={props.blogData.content}
							className='edit-form-content'
							onChange={(e) =>
								props.setBlogData({
									...props.blogData,
									content: e.target.value,
								})
							}
							required
						/>
						<button
							disabled={
								!props.blogData.content || !props.blogData.title
							}
							className='edit-form-button'
							onClick={() => props.send()}
						>
							Update
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditModal;
