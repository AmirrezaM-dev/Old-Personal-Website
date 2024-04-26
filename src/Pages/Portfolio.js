import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { useGlobals } from "../Components/useGlobals"
import { Row, Col, Carousel } from "react-bootstrap"
import { PhotoSwipe } from "react-photoswipe"

const Portfolio = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const location = useLocation()

	const { useOutside } = useGlobals()
	const { tag, id } = useParams()
	const navigate = useNavigate()
	const categoryRef = useRef(null)
	const [categoryIsOpen, setCategoryIsOpen] = useState(false)
	const [category, setCategory] = useState("All")
	useOutside(categoryRef, () => {
		setCategoryIsOpen(false)
	})
	useEffect(() => {
		if (tag) {
			switch (tag.toLowerCase()) {
				case "webdesign":
					setCategory("Web Design")
					break
				case "applications":
					setCategory("Applications")
					break
				default:
					setCategory("All")
					break
			}
		} else {
			setCategory("All")
		}
	}, [tag])
	const sliderRef = useRef(null)
	const [sliderItemsCount, setSliderItemsCount] = useState(0)
	const [sliderActiveIndex, setSliderActiveIndex] = useState(0)
	const sliderInterval = 5000
	useEffect(() => {
		if (id) {
			if (sliderRef.current)
				setSliderItemsCount(
					sliderRef.current.element.children[0].children.length
				)
			const interval = setInterval(() => {
				setSliderActiveIndex(
					sliderItemsCount - 1 > sliderActiveIndex
						? sliderActiveIndex + 1
						: 0
				)
			}, sliderInterval)

			return () => clearInterval(interval)
		}
	}, [id, sliderActiveIndex, sliderItemsCount])
	const [isPswpOpen, setIsPswpOpen] = useState(false)
	const pswp = useRef(null)

	const SliderIndicators = () => {
		let Items = []
		for (let i = 0; i < sliderItemsCount; i++) {
			Items.push(
				<span
					key={i}
					onClick={() => setSliderActiveIndex(i)}
					className={`mx-1 swiper-pagination-bullet ${
						sliderActiveIndex === i
							? "swiper-pagination-bullet-active"
							: ""
					}`}
				></span>
			)
		}
		return Items
	}

	useEffect(() => {
		if (!isLoaded) {
			navigate(location.pathname.replace(/&gid=[0-9]&pid=[0-9]/g, ""))
			setIsLoaded(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoaded])

	const [currentIndex, setCurrentIndex] = useState(0)

	const callPortfolio = (id) => {
		let Title = "title",
			Client = "client",
			Datee = "date",
			Info = "info"
		// eslint-disable-next-line default-case
		switch (id) {
			case "1":
				Title = "DWX Cryptocurrency Trading"
				Client = "Upland Group"
				Datee = "27 January, 2022"
				Info = (
					<p>
						Multiple language website related to trading currency
						located in turkey.
					</p>
				)
				break
			case "2":
				Title = "Game Boosting Website"
				Client = "Top Boost"
				Datee = "13 April, 2022"
				Info = (
					<p>
						Boosting website for gamers and players to grow gaming
						accounts in games such as league of legends.
					</p>
				)
				break
			case "3":
				Title = "Upland Group Company"
				Client = "Upland Group"
				Datee = "3 August, 2022"
				Info = (
					<p>Multiple purpose website, Real Estate Agency, Trading</p>
				)
				break
			case "4":
				Title = "Upland Group 2 Company"
				Client = "Upland Group"
				Datee = "15 November, 2022"
				Info = (
					<p>
						Multiple purpose website, Real Estate Agency, Trading,
						Movie creator, Content Creator
					</p>
				)
				break
		}
		return (
			<>
				<PhotoSwipe
					ref={pswp}
					id="my-photoswipe"
					isOpen={isPswpOpen}
					items={[
						{
							src: `${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-1.png`,
							w: 1920,
							h: 1080,
						},
						{
							src: `${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-2.png`,
							w: 1920,
							h: 1080,
						},
						{
							src: `${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-3.png`,
							w: 1920,
							h: 1080,
						},
						{
							src: `${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-4.png`,
							w: 1920,
							h: 1080,
						},
						{
							src: `${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-5.png`,
							w: 1920,
							h: 1080,
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
					<h1 className="title title--h1 title__separate">
						Portfolio {id}
					</h1>
				</div>
				<Link
					className="btn-back"
					to={`/Portfolio/${tag ? (tag === "id" ? "" : tag) : ""}`}
				>
					<i className="feathericon-arrow-left"></i>Back to portfolios
				</Link>
				<header className="header-project">
					<h1 className="title title--h1">{Title}</h1>
					<div className="header-project__image-wrap">
						<img
							className="cover"
							src={`${process.env.PUBLIC_URL}/images/projects/project-${id}.png`}
							alt=""
						/>
					</div>
				</header>
				<ul className="details-info details-info--inline">
					<li className="details-info__item">
						<span className="box icon-box">
							<i className="font-icon feathericon-user"></i>
						</span>
						<div className="details-info__info">
							<span className="overhead">Client</span>
							{Client}
						</div>
					</li>
					<li className="details-info__item">
						<span className="box icon-box">
							<i className="font-icon feathericon-layers"></i>
						</span>
						<div className="details-info__info">
							<span className="overhead">Category</span>
							Web Design
						</div>
					</li>
					<li className="details-info__item">
						<span className="box icon-box">
							<i className="font-icon icon-calendar"></i>
						</span>
						<div className="details-info__info">
							<span className="overhead">Date</span>
							{Datee}
						</div>
					</li>
				</ul>
				{Info}
				<Carousel
					ref={sliderRef}
					fade={true}
					controls={false}
					indicators={false}
					variant={"dark"}
					activeIndex={sliderActiveIndex}
					className={"cursor-pointer"}
				>
					<Carousel.Item
						onClick={() => {
							setCurrentIndex(0)
							setIsPswpOpen(true)
						}}
					>
						<img
							className="d-block w-100"
							src={`${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-1.png`}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item
						onClick={() => {
							setCurrentIndex(1)
							setIsPswpOpen(true)
						}}
					>
						<img
							className="d-block w-100"
							src={`${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-2.png`}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item
						onClick={() => {
							setCurrentIndex(2)
							setIsPswpOpen(true)
						}}
					>
						<img
							className="d-block w-100"
							src={`${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-3.png`}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item
						onClick={() => {
							setCurrentIndex(3)
							setIsPswpOpen(true)
						}}
					>
						<img
							className="d-block w-100"
							src={`${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-4.png`}
							alt=""
						/>
					</Carousel.Item>
					<Carousel.Item
						onClick={() => {
							setCurrentIndex(3)
							setIsPswpOpen(true)
						}}
					>
						<img
							className="d-block w-100"
							src={`${process.env.PUBLIC_URL}/images/projects/Moonboard${id}-5.png`}
							alt=""
						/>
					</Carousel.Item>
				</Carousel>
				<Col
					className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
					sm={12}
				>
					<SliderIndicators />
				</Col>
			</>
		)
	}

	return id ? (
		callPortfolio(id)
	) : (
		<>
			<div className="pb-3">
				<h1 className="title title--h1 title__separate">Portfolio</h1>
			</div>
			{/* <div
				ref={categoryRef}
				className={`select ${categoryIsOpen ? "is-open" : ""}`}
			>
				<span
					className="placeholder bg-transparent"
					onClick={() => setCategoryIsOpen(!categoryIsOpen)}
				>
					{category}
				</span>
				<ul className="filter">
					<li className="filter__item">Category</li>
					<li
						onClick={() => navigate("/Portfolio")}
						className={`filter__item ${
							!tag || tag === "" ? "active" : ""
						}`}
					>
						<span
							className={`filter__link ${
								!tag || tag === "" ? "active" : ""
							}`}
						>
							All
						</span>
					</li>
					<li
						onClick={() => navigate("/Portfolio/WebDesign")}
						className={`filter__item ${
							tag && tag.toLowerCase() === "webdesign"
								? "active"
								: ""
						}`}
					>
						<span
							className={`filter__link ${
								tag && tag.toLowerCase() === "webdesign"
									? "active"
									: ""
							}`}
						>
							Web Design
						</span>
					</li>
					<li
						onClick={() => navigate("/Portfolio/Applications")}
						className={`filter__item ${
							tag && tag.toLowerCase() === "applications"
								? "active"
								: ""
						}`}
					>
						<span
							className={`filter__link ${
								tag && tag.toLowerCase() === "applications"
									? "active"
									: ""
							}`}
						>
							Applications
						</span>
					</li>
				</ul>
			</div> */}
			<Row>
				<Col sm={12} md={6} lg={4} className={"my-3"}>
					<Link to={`/Portfolio/${tag ? tag : "id"}/1`}>
						<div className="gallery-grid__image-wrap">
							<img
								className="gallery-grid__image cover"
								src={`${process.env.PUBLIC_URL}/images/projects/project-1.png`}
								alt=""
							/>
						</div>
						<div className="gallery-grid__caption">
							<h3 className="title gallery-grid__title">
								DWX Cryptocurrency Trading
							</h3>
							<span className="gallery-grid__category">
								Web Design
							</span>
						</div>
					</Link>
				</Col>

				<Col sm={12} md={6} lg={4} className={"my-3"}>
					<Link to={`/Portfolio/${tag ? tag : "id"}/2`}>
						<div className="gallery-grid__image-wrap">
							<img
								className="gallery-grid__image cover"
								src={`${process.env.PUBLIC_URL}/images/projects/project-2.png`}
								alt=""
							/>
						</div>
						<div className="gallery-grid__caption">
							<h3 className="title gallery-grid__title">
								Game Boosting Website
							</h3>
							<span className="gallery-grid__category">
								Web Design
							</span>
						</div>
					</Link>
				</Col>

				<Col sm={12} md={6} lg={4} className={"my-3"}>
					<Link to={`/Portfolio/${tag ? tag : "id"}/3`}>
						<div className="gallery-grid__image-wrap">
							<img
								className="gallery-grid__image cover"
								src={`${process.env.PUBLIC_URL}/images/projects/project-3.png`}
								alt=""
							/>
						</div>
						<div className="gallery-grid__caption">
							<h3 className="title gallery-grid__title">
								Upland Group Company
							</h3>
							<span className="gallery-grid__category">
								Web Design
							</span>
						</div>
					</Link>
				</Col>

				<Col sm={12} md={6} lg={4} className={"my-3"}>
					<Link to={`/Portfolio/${tag ? tag : "id"}/4`}>
						<div className="gallery-grid__image-wrap">
							<img
								className="gallery-grid__image cover"
								src={`${process.env.PUBLIC_URL}/images/projects/project-4.png`}
								alt=""
							/>
						</div>
						<div className="gallery-grid__caption">
							<h3 className="title gallery-grid__title">
								Upland Group 2 Company
							</h3>
							<span className="gallery-grid__category">
								Web Design
							</span>
						</div>
					</Link>
				</Col>

				<Col
					className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
					sm={12}
				>
					<span className="mx-1 swiper-pagination-bullet swiper-pagination-bullet-active"></span>
					{/* <span className="mx-1 swiper-pagination-bullet"></span> */}
				</Col>
			</Row>
		</>
	)
}

export default Portfolio
