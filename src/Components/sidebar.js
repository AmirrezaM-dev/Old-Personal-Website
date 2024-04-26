import { useState } from "react"
import { Col, Figure, Button } from "react-bootstrap"

const Sidebar = () => {
	const [showContacts, setShowContacts] = useState(false)
	return (
		<Col xl={3} md={12}>
			<div className="sidebar box-outer sticky-column position-sticky top-0">
				<div className="sidebar__base-info">
					<Figure className="avatar-box">
						<img
							src={`${process.env.PUBLIC_URL}/images/my-avatar.png`}
							alt="Ricardo Black"
						/>
					</Figure>
					<div className="text-xl-center">
						<h3 className="title title--h3 sidebar__name">
							Amirreza Malaki
						</h3>
						<div className="badge">Programmer / Web Developer</div>
					</div>
					<Button
						className="btn btn--small btn--icon-right sidebar__btn"
						onClick={() => setShowContacts(!showContacts)}
					>
						<span>Show Contacts</span>
						<i className="feathericon-chevron-down"></i>
					</Button>
				</div>
				<div
					className={`sidebar__additional-info ${
						showContacts ? "d-block" : ""
					}`}
				>
					<div className="separation"></div>
					<ul className="details-info">
						<li className="details-info__item">
							<span className="box icon-box">
								<i className="font-icon icon-envelope"></i>
							</span>
							<div className="contacts-block__info">
								<span className="overhead">Email</span>
								<a
									className="text-overflow"
									href="mailto:info@amirrezamalaki.com"
									title="info@amirrezamalaki.com"
								>
									info@amirrezamalaki.com
								</a>
							</div>
						</li>
						<li className="details-info__item">
							<span className="box icon-box">
								<i className="font-icon icon-phone"></i>
							</span>
							<div className="contacts-block__info">
								<span className="overhead">Phone</span>
								<span
									className="text-overflow"
									title="+971588517790"
								>
									+971 588 51 77 90
								</span>
							</div>
						</li>
						<li className="details-info__item">
							<span className="box icon-box">
								<i className="font-icon icon-location"></i>
							</span>
							<div className="contacts-block__info">
								<span className="overhead">Location</span>
								<span
									className="text-overflow"
									title="Turkey / UAE"
								>
									Worldwide / UAE (Dubai)
								</span>
							</div>
						</li>
					</ul>
					<div className="separation d-xl-none"></div>
					<div className="social">
						<a
							className="social__link"
							target="_blank"
							href="https://t.me/amirntm"
							rel="noreferrer"
						>
							<i className="feathericon-send"></i>
						</a>
						<a
							className="social__link"
							target="_blank"
							href="http://instagram.com/amirntm"
							rel="noreferrer"
						>
							<i className="feathericon-instagram"></i>
						</a>
					</div>
				</div>
			</div>
		</Col>
	)
}

export default Sidebar
