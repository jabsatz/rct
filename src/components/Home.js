import React from "react";
import './Home.css';

function Home() {
	return (
		<>
			<article className="article">
				<h2 className="article-title">Title 1</h2>
				<img
					className="article-image"
					width="200"
					align="right"
					src="https://www.w3schools.com/w3css/img_lights.jpg"
					alt=""
				/>
				<p className="article-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue pellentesque nulla, sit amet
					hendrerit ligula. Aenean arcu urna, tincidunt eget porta at, lacinia vitae leo. Integer laoreet pharetra
					placerat. Duis auctor sollicitudin urna, ornare posuere lectus volutpat eget. Sed placerat lorem eget commodo
					elementum. Mauris rhoncus euismod maximus. Mauris ornare turpis convallis pharetra tempor. Donec vitae
					venenatis tellus, vitae dignissim nisl. Nunc et feugiat erat. Integer condimentum lacus tellus, sed vehicula
					nisl rhoncus a. Nulla molestie iaculis neque eu porttitor. Vestibulum et odio luctus, pellentesque ipsum quis,
					placerat turpis. Maecenas facilisis ex mi, nec semper eros ultricies quis. Integer tempor, justo vel elementum
					vestibulum, augue magna venenatis ante, et molestie sapien metus sagittis felis. Etiam nec vehicula lectus.
					Duis dapibus lacus non tempor scelerisque. Vestibulum id odio eros. In nec aliquet metus, vel sodales enim.
					Donec ligula magna, ultricies vitae rutrum nec, mollis vel augue. Ut lobortis pretium justo vel ultrices. Duis
					non fermentum est.
				</p>
			</article>
			<article className="article">
				<h2 className="article-title">Title 2</h2>
				<img
					className="article-image"
					width="200"
					align="right"
					src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg"
					alt=""
				/>
				<p className="article-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue pellentesque nulla, sit amet
					hendrerit ligula. Aenean arcu urna, tincidunt eget porta at, lacinia vitae leo. Integer laoreet pharetra
					placerat. Duis auctor sollicitudin urna, ornare posuere lectus volutpat eget. Sed placerat lorem eget commodo
					elementum. Mauris rhoncus euismod maximus. Mauris ornare turpis convallis pharetra tempor. Donec vitae
					venenatis tellus, vitae dignissim nisl. Nunc et feugiat erat. Integer condimentum lacus tellus, sed vehicula
					nisl rhoncus a. Nulla molestie iaculis neque eu porttitor. Vestibulum et odio luctus, pellentesque ipsum quis,
					placerat turpis. Maecenas facilisis ex mi, nec semper eros ultricies quis. Integer tempor, justo vel elementum
					vestibulum, augue magna venenatis ante, et molestie sapien metus sagittis felis. Etiam nec vehicula lectus.
					Duis dapibus lacus non tempor scelerisque. Vestibulum id odio eros. In nec aliquet metus, vel sodales enim.
					Donec ligula magna, ultricies vitae rutrum nec, mollis vel augue. Ut lobortis pretium justo vel ultrices. Duis
					non fermentum est.
				</p>
			</article>
		</>
	);
}

export default Home;
