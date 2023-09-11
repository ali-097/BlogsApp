import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<div className='landing-content'>
				<h1>Welcome to Our Blog Platform</h1>
				<p>Explore and share your thoughts with the world.</p>
				<div className='action-buttons'>
					<Link
						to='/create'
						className='action-button create-button'
					>
						Create a Blog
					</Link>
					<Link
						to='/Blogs'
						className='action-button explore-button'
					>
						Explore Blogs
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
