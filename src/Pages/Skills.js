import { createRef, useEffect, useRef, useState } from "react"

const Skills = () => {
	const progressBarRef = useRef([])
	const [progressBars, setProgressBars] = useState([])
	const ProgressBar = () => {
		let Items = []
		for (let i = 0; i < progressBars.length; i++) {
			progressBarRef[i] = createRef()
			Items.push(
				<div className="progress" key={i}>
					<div className="progress-text">
						<span>{progressBars[i].name}</span>{" "}
						{progressBars[i].value}%
					</div>
					<div className="progress-bar">
						<span
							ref={progressBarRef[i]}
							role="progressbar"
							aria-valuenow={progressBars[i].value}
							aria-valuemin="0"
							aria-valuemax="100"
							// style={{ width: `80%`, zIndex: 2 }}
						></span>
					</div>
				</div>
			)
		}
		return Items
	}
	useEffect(() => {
		setProgressBars([
			{ name: "Web Development", value: 100 },
			{ name: "Desktop Application", value: 70 },
			{ name: "Phone Application", value: 50 },
		])
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style =
						"width:" +
						entry.target.attributes["aria-valuenow"].value +
						"%;z-index:2"
				}
			})
		})
		const onScroll = () => {
			for (let i = 0; i < progressBars.length; i++) {
				observer.observe(progressBarRef[i].current)
			}
		}
		window.addEventListener("scroll", onScroll)
		for (let i = 0; i < progressBars.length; i++) {
			observer.observe(progressBarRef[i].current)
		}
		window.scrollTo({
			top: window.pageYOffset + 1,
			behavior: "instant",
		})
		window.scrollTo({
			top: window.pageYOffset - 1,
			behavior: "instant",
		})
		return () => window.removeEventListener("scroll", onScroll)
	}, [progressBars.length])

	return (
		<>
			<div className="pb-3">
				<h1 className="title title--h1 title__separate">Skills</h1>
			</div>
			<h2 className="title title--h2">
				<span className="box icon-box">
					<i className="font-icon feathericon-code"></i>
				</span>
				Programming Languages
			</h2>
			<div className="timeline">
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">HTML</h5>
					<span className="timeline__period">
						Hyper Text Markup Language
					</span>
					{/* <p className="timeline__description">
						test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">CSS</h5>
					<span className="timeline__period">
						Cascading Style Sheets
					</span>
					{/* <p className="timeline__description">
						test
					</p> */}
				</article>

				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">
						JavaScript
					</h5>
					<span className="timeline__period">
						World's most popular programming language
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">PHP</h5>
					<span className="timeline__period">
						PHP: Hypertext Preprocessor
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
			</div>

			<h2 className="title title--h2">
				<span className="box icon-box">
					<i className="font-icon feathericon-paperclip"></i>
				</span>
				Libraries/Frameworks
			</h2>
			<div className="timeline">
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">
						React.js
					</h5>
					<span className="timeline__period">
						JavaScript library created by Facebook
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">Node.js</h5>
					<span className="timeline__period">
						Open source server environment
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">
						Express.js
					</h5>
					<span className="timeline__period">
						A minimal and flexible Node.js web application
						framework.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">
						Electron.js
					</h5>
					<span className="timeline__period">
						Cross-platform desktop app builder
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">jQuery</h5>
					<span className="timeline__period">
						jQuery is a lightweight, "write less, do more",
						JavaScript library.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">AJAX</h5>
					<span className="timeline__period">
						Asynchronous JavaScript And XML.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">
						Bootstrap
					</h5>
					<span className="timeline__period">
						A free front-end framework.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">JSON</h5>
					<span className="timeline__period">
						JavaScript Object Notation.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
				<article className="timeline__item">
					<h5 className="title title--h4 timeline__title">Laravel</h5>
					<span className="timeline__period">
						Open-source PHP web framework.
					</span>
					{/* <p className="timeline__description">
						Test
					</p> */}
				</article>
			</div>

			<h2 className="title title--h2 mt-3">Profession</h2>
			<div className="box box-inner mb-0">
				<ProgressBar />
			</div>
		</>
	)
}

export default Skills
