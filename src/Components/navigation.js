import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
	const pathName = useLocation().pathname + "/"
	const [nav, setNav] = useState([])
	const Nav = () => {
		let Items = []
		for (let i = 0; i < nav.length; i++) {
			let path = (nav[i].path ? nav[i].path : `/${nav[i].name}`) + "/"
			Items.push(
				<li className="nav__item" key={i}>
					<Link
						className={
							path === pathName ||
							(path !== "//" && pathName.indexOf(path) !== -1)
								? "active"
								: ""
						}
						to={path === "//" ? "/" : path}
					>
						{nav[i].name}
					</Link>
				</li>
			)
		}
		return Items
	}
	useEffect(() => {
		setNav([
			{ name: "Home", path: "/" },
			{ name: "Skills" },
			{ name: "Portfolio" },
			// { name: "Blog" },
			// { name: "Contact" },
		])
		return () => {}
	}, [])

	return (
		<div className="nav-container">
			<ul className="nav">
				<Nav />
			</ul>
		</div>
	)
}

export default Navigation
