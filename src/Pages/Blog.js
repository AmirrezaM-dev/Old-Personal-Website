import { useEffect, useRef, useState } from "react"
import { Button, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import { PhotoSwipe } from "react-photoswipe"

const Blog = () => {
	const { id } = useParams()
	const Emojies = (
		<Tooltip>
			<div className="emoji-wrap">
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-laughing.svg`}
					alt="laughing"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-happy-2.svg`}
					title=":happy 2:"
					alt="happy 2"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-crazy.svg`}
					title=":crazy:"
					alt="crazy"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-bad.svg`}
					title=":bad:"
					alt="bad"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-angry.svg`}
					title=":angry:"
					alt="angry"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-happy.svg`}
					title="happy"
					alt="happy"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-thinking.svg`}
					title=":thinking:"
					alt="thinking"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-sad.svg`}
					title=":sad:"
					alt="sad"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-pressure.svg`}
					title=":pressure:"
					alt="pressure"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-in-love.svg`}
					title=":in love:"
					alt="in love"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-nerd.svg`}
					title=":laughing:"
					alt="nerd"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-happy-3.svg`}
					title=":happy 3:"
					alt="happy 3"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-shocked.svg`}
					title=":shocked:"
					alt="shocked"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-wink.svg`}
					title=":wink:"
					alt="wink"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-sweating.svg`}
					title=":sweating:"
					alt="sweating"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-shocked-2.svg`}
					title=":shocked 2:"
					alt="shocked 2"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-shocked-3.svg`}
					title=":shocked 3:"
					alt="shocked 3"
				/>
				<img
					className="emoji"
					src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-sad-2.svg`}
					title=":sad 2:"
					alt="sad 2"
				/>
			</div>
		</Tooltip>
	)

	const navigate = useNavigate()
	const [isPswpOpen, setIsPswpOpen] = useState(false)
	const pswp = useRef(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const location = useLocation()
	useEffect(() => {
		if (!isLoaded) {
			navigate(location.pathname.replace(/&gid=[0-9]&pid=[0-9]/g, ""))
			setIsLoaded(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoaded])
	const [currentIndex, setCurrentIndex] = useState(0)

	return id ? (
		<>
			<PhotoSwipe
				ref={pswp}
				id="my-photoswipe"
				isOpen={isPswpOpen}
				items={[
					{
						src: `${process.env.PUBLIC_URL}/images/news/news-add-1.jpg`,
						w: 768,
						h: 1100,
					},
					{
						src: `${process.env.PUBLIC_URL}/images/news/news-add-2.jpg`,
						w: 768,
						h: 1100,
					},
				]}
				options={{
					shareEl: false,
					fullscreenEl: false,
					zoomEl: false,
					index: currentIndex,
				}}
				onClose={() => {
					setCurrentIndex(0)
					setIsPswpOpen(false)
				}}
			/>
			<div className="pb-3">
				<h1 className="title title--h1 title__separate">Blog</h1>
			</div>
			<Link className="btn-back" to={`/Blog`}>
				<i className="feathericon-arrow-left"></i>Back to blog
			</Link>
			<div className="pb-3">
				<header className="header-post">
					<h1 className="title title--h1">Web Design Weekly #38</h1>
					<div className="caption-post">
						<p>
							Above all, think of life as a prototype. We can
							conduct experiments, make discoveries, and change
							our perspectives. We can look for opportunities to
							turn processes into projects that have tangible
							outcomes.
						</p>
					</div>
					<div className="header-post__image-wrap">
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/image_02.jpg`}
							alt=""
						/>
					</div>
				</header>
				<div className="caption-post">
					<p>
						We can learn how to take joy in the things we create
						whether they take the form of a fleeting experience or
						an heirloom that will last for generations. We can learn
						that reward comes in creation and re-creation.
					</p>
					<p>
						It is not enough that we build products that function,
						that are understandable and usable, we also need to
						build products that bring joy and excitement, pleasure
						and fun, and, yes, beauty to people’s lives. Creativity
						is to discover a question that has never been asked.
					</p>
				</div>
				<div className="gallery-post">
					<img
						className="gallery-post__item cover cursor-pointer"
						src={`${process.env.PUBLIC_URL}/images/news/news-add-1.jpg`}
						alt=""
						onClick={() => {
							setCurrentIndex(0)
							setIsPswpOpen(true)
						}}
					/>
					<img
						className="gallery-post__item cover cursor-pointer"
						src={`${process.env.PUBLIC_URL}/images/news/news-add-2.jpg`}
						alt=""
						onClick={() => {
							setCurrentIndex(1)
							setIsPswpOpen(true)
						}}
					/>
					<div className="gallery-post__caption">
						Work by <Link to="/">Colin Adams</Link>,{" "}
						<Link to="/">Mark Craig</Link>
					</div>
				</div>
				<div className="caption-post">
					<h2 className="title title--h2">
						If you’re not prepared to be wrong, you’ll never come up
						with anything original.
					</h2>
					<p>
						Here is one of the few effective keys to the design
						problem: the ability of the designer to recognize as
						many of the constraints as possible his willingness and
						enthusiasm for working within these constraints. The
						most profound technologies are those that disappear.
						They weave themselves into the fabric of everyday life
						until they are indistinguishable from it.
					</p>
					<blockquote className="block-quote">
						<p>
							The alternative to good design is always bad design.
							There is no such thing as no design.
						</p>
						<span className="block-quote__author">Adam Judge</span>
					</blockquote>
					<p>
						Above all, think of life as a prototype. We can conduct
						experiments, make discoveries, and change our
						perspectives. We can look for opportunities to turn
						processes into projects that have tangible outcomes.
					</p>
					<p>
						We can learn how to take joy in the things we create
						whether they take the form of a fleeting experience or
						an heirloom that will last for generations. We can learn
						that reward comes in creation and re-creation, no just
						in the consumption of the world around us. Active
						participation in the process of creation is our right
						and our privilege. We can learn to measure the success
						of our ideas not by our bank accounts by their impact on
						the world.
					</p>
				</div>
				<footer className="footer-post">
					<a
						className="footer-post__share"
						href="http://facebook.com/"
					>
						<i className="font-icon icon-facebook"></i>
						<span>Facebook</span>
					</a>
					<a
						className="footer-post__share"
						href="http://twitter.com/"
					>
						<i className="font-icon icon-twitter"></i>
						<span>Twitter</span>
					</a>
					<a
						className="footer-post__share"
						href="http://linkedin.com/"
					>
						<i className="font-icon icon-linkedin2"></i>
						<span>Linkedin</span>
					</a>
				</footer>
			</div>

			<h2 className="title title--h2">Comments (3)</h2>

			<div className="comment-box">
				<div className="comment-box__inner box">
					<figure className="box box-avatar box-avatar--not-border">
						<img
							src={`${process.env.PUBLIC_URL}/images/avatar-1.png`}
							alt="Daniel Lewis"
						/>
					</figure>
					<div className="comment-box__body">
						<h3 className="comment-box__details">
							<span>Daniel Lewis</span>
							<span className="comment-box__details-date">
								5 min ago
							</span>
						</h3>
						<p>
							Very interesting and informative article on design.
							I learned a lot.
						</p>

						<ul className="comment-box__footer">
							<li>
								<Link to="/" className="link-gradient">
									Reply
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="comment-box">
					<div className="comment-box__inner box">
						<figure className="box box-avatar box-avatar--not-border">
							<img
								src={`${process.env.PUBLIC_URL}/images/avatar-2.png`}
								alt="Daniel Lewis"
							/>
						</figure>
						<div className="comment-box__body">
							<h3 className="comment-box__details">
								<span>Jessica Miller</span>
								<span className="comment-box__details-date">
									1 min ago
								</span>
							</h3>
							<p>
								I agree, a very interesting article. Thank you
								very much!
								<img
									className="emoji"
									src={`${process.env.PUBLIC_URL}/icons/emoji/emoji-nerd.svg`}
									alt="nerd"
								/>
							</p>

							<ul className="comment-box__footer">
								<li>
									<Link to="/" className="link-gradient">
										Reply
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="comment-box">
				<div className="comment-box__inner box">
					<figure className="box box-avatar box-avatar--not-border">
						<img
							src={`${process.env.PUBLIC_URL}/images/avatar-4.png`}
							alt="Daniel Lewis"
						/>
					</figure>
					<div className="comment-box__body">
						<h3 className="comment-box__details">
							<span>Henry William</span>
							<span className="comment-box__details-date">
								15 min ago
							</span>
						</h3>
						<p>
							Thanks for the good article. Looking forward to new
							ones.
						</p>

						<ul className="comment-box__footer">
							<li>
								<Link to="/" className="link-gradient">
									Reply
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<ul className="social-auth">
				<li className="social-auth__item">Login with:</li>
				<li className="social-auth__item">
					<Link className="social-auth__link" to="/">
						<i className="font-icon icon-facebook"></i>
					</Link>
				</li>
				<li className="social-auth__item">
					<Link className="social-auth__link" to="/">
						<i className="font-icon icon-twitter"></i>
					</Link>
				</li>
				<li className="social-auth__item">
					<Link className="social-auth__link" to="/">
						<i className="font-icon icon-dribbble"></i>
					</Link>
				</li>
				<li className="social-auth__item">
					<Link className="social-auth__link" to="/">
						<i className="font-icon icon-behance"></i>
					</Link>
				</li>
			</ul>
			<form className="comment-form">
				<textarea
					id="commentForm"
					className="textarea form-control"
					required="required"
					placeholder="Write a Comment..."
					rows="1"
				></textarea>
				<button type="submit" className="btn btn-submit">
					<i className="font-icon icon-send"></i>
				</button>
				<div className="dropdown dropup">
					<OverlayTrigger
						trigger="click"
						placement="top"
						overlay={Emojies}
						rootClose={true}
					>
						<Button variant="none" className="btn btn-emoji">
							<i className="font-icon icon-smile"></i>
						</Button>
					</OverlayTrigger>
				</div>
			</form>
		</>
	) : (
		<>
			<div className="pb-3">
				<h1 className="title title--h1 title__separate">Blog</h1>
			</div>
			<div className="news-grid">
				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-1.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">
								Design Conferences in 2019
							</a>
						</h2>
						<p>
							Veritatis et quasi architecto beatae vitae dicta
							sunt, explicabo.
						</p>
					</div>
				</article>

				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-2.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">
								Best Fonts Every Designer
							</a>
						</h2>
						<p>
							Sed ut perspiciatis, nam libero tempore, cum soluta
							nobis est eligendi.
						</p>
					</div>
				</article>

				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-3.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">Design Digest #80</a>
						</h2>
						<p>
							Excepteur sint occaecat cupidatat no proident, quis
							nostrum exercitationem ullam corporis suscipit.
						</p>
					</div>
				</article>

				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-4.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">
								UI Interactions of the week
							</a>
						</h2>
						<p>
							Enim ad minim veniam, consectetur adipiscing elit,
							quis nostrud exercitation ullamco laboris nisi.
						</p>
					</div>
				</article>

				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-5.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">
								The Forgotten Art of Spacing
							</a>
						</h2>
						<p>
							Maxime placeat, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</p>
					</div>
				</article>

				<article className="news-item box">
					<div className="news-item__image-wrap">
						<Link
							className="news-item__link"
							to="/Blog/123456"
						></Link>
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/news/news-6.jpg`}
							alt=""
						/>
					</div>
					<div className="news-item__caption">
						<div className="news-item__date">
							<span>Design</span>Sep 16, 2021
						</div>
						<h2 className="title title--h2">
							<a href="single-post.html">Design Digest #79</a>
						</h2>
						<p>
							Optio cumque nihil impedit uo minus quod maxime
							placeat, velit esse cillum.
						</p>
					</div>
				</article>
			</div>
			<Col
				className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
				sm={12}
			>
				<span className="mx-1 swiper-pagination-bullet swiper-pagination-bullet-active"></span>
				<span className="mx-1 swiper-pagination-bullet"></span>
			</Col>
		</>
	)
}

export default Blog
