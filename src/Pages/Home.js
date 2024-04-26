import { Row, Col } from "react-bootstrap"

const Home = () => {
	return (
		<>
			<div className="pb-0 pb-sm-2">
				<h1 className="title title--h1 title__separate">About Me</h1>
				<p>I'm a professional full-stack programmer/developer.</p>
				<p>
					I'm your problem solver I find best solutions for your
					business and make it premium quality.
				</p>
			</div>
			<h2 className="title title--h2 mt-3">What I'm Doing</h2>
			<Row>
				<Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={
								process.env.PUBLIC_URL + "/images/icon-dev.svg"
							}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">Web Development</h3>
							<p className="case-item__caption">
								Website development using latest and fastest
								technologies.
							</p>
						</div>
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={process.env.PUBLIC_URL + "/images/android.png"}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">Android Apps</h3>
							<p className="case-item__caption">
								Android app related to your website or depends
								on your needs.
							</p>
						</div>
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={process.env.PUBLIC_URL + "/images/ios.png"}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">IOS Apps</h3>
							<p className="case-item__caption">
								IOS app related to your website or depends on
								your needs.
							</p>
						</div>
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={process.env.PUBLIC_URL + "/images/windows.png"}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">Windows Apps</h3>
							<p className="case-item__caption">
								Using electron.js one of the strongest
								technologies to develop applications.
							</p>
						</div>
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={process.env.PUBLIC_URL + "/images/linux.png"}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">Linux Apps</h3>
							<p className="case-item__caption">
								Using electron.js one of the strongest
								technologies to develop applications.
							</p>
						</div>
					</div>
				</Col>
				{/* <Col lg={6} xs={12}>
					<div className="case-item box box-inner">
						<img
							className="case-item__icon"
							src={process.env.PUBLIC_URL + "/images/icon-photo.svg"}
							alt=""
						/>
						<div>
							<h3 className="title title--h3">Photography</h3>
							<p className="case-item__caption">
								I make high-quality photos of any category at a
								professional level.
							</p>
						</div>
					</div>
				</Col> */}
				{/* <Col
					className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
					sm={12}
				>
					<span className="mx-1 swiper-pagination-bullet swiper-pagination-bullet-active"></span>
					<span className="mx-1 swiper-pagination-bullet"></span>
				</Col> */}
			</Row>
			{/* <Row>
				<h2 className="title title--h2 mt-3">Testimonials</h2>
				<Col lg={6} md={12} className="">
					<div className="swiper-slide review-item box box-inner">
						<Figure className="box box-avatar">
							<img
								src={`${process.env.PUBLIC_URL}/images/avatar-2.png`}
								alt="Daniel Lewis"
							/>
						</Figure>
						<h4 className="title title--h3">Jessica Miller</h4>
						<p className="review-item__caption">
							Thanks to the skill of Ricardo, we have a design
							that we can be proud of. We are impressed with...
						</p>
					</div>
				</Col>
				<Col lg={6} md={12} className="d-lg-block d-none">
					<div className="swiper-slide review-item box box-inner">
						<Figure className="box box-avatar">
							<img
								src={`${process.env.PUBLIC_URL}/images/avatar-2.png`}
								alt="Daniel Lewis"
							/>
						</Figure>
						<h4 className="title title--h3">Jessica Miller</h4>
						<p className="review-item__caption">
							Thanks to the skill of Ricardo, we have a design
							that we can be proud of. We are impressed with...
						</p>
					</div>
				</Col>
				<Col lg={6} md={12} className="d-none">
					<div className="swiper-slide review-item box box-inner">
						<Figure className="box box-avatar">
							<img
								src={`${process.env.PUBLIC_URL}/images/avatar-2.png`}
								alt="Daniel Lewis"
							/>
						</Figure>
						<h4 className="title title--h3">Jessica Miller</h4>
						<p className="review-item__caption">
							Thanks to the skill of Ricardo, we have a design
							that we can be proud of. We are impressed with...
						</p>
					</div>
				</Col>
				<Col
					className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
					sm={12}
				>
					<span className="mx-1 swiper-pagination-bullet swiper-pagination-bullet-active"></span>
					<span className="mx-1 swiper-pagination-bullet"></span>
				</Col>
			</Row> */}
			{/* <Row>
				<h2 className="title title--h2 mt-3">Clients</h2>
				<Col className="mx-2">
					<a href="/asd">
						<img
							className="logo-client"
							src={process.env.PUBLIC_URL + "/images/clients/logo-1-color.png"}
							alt="Logo"
						/>
					</a>
				</Col>
				<Col className="mx-2">
					<a href="/asd">
						<img
							className="logo-client"
							src={process.env.PUBLIC_URL + "/images/clients/logo-1-color.png"}
							alt="Logo"
						/>
					</a>
				</Col>
				<Col className="mx-2 d-md-block d-none" as={Col}>
					<a href="/asd">
						<img
							className="logo-client"
							src={process.env.PUBLIC_URL + "/images/clients/logo-1-color.png"}
							alt="Logo"
						/>
					</a>
				</Col>
				<Col className="mx-2 d-lg-block d-none" as={Col}>
					<a href="/asd">
						<img
							className="logo-client"
							src={process.env.PUBLIC_URL + "/images/clients/logo-1-color.png"}
							alt="Logo"
						/>
					</a>
				</Col>
				<Col
					className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
					sm={12}
				>
					<span className="mx-1 swiper-pagination-bullet swiper-pagination-bullet-active"></span>
					<span className="mx-1 swiper-pagination-bullet"></span>
				</Col>
			</Row> */}
		</>
	)
}

export default Home
