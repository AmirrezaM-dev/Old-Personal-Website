import { HashRouter as Router, useRoutes } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "./Components/sidebar"
import Navigation from "./Components/navigation"
import Home from "./Pages/Home"
import Skills from "./Pages/Skills"
import Blog from "./Pages/Blog"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"

const App = () => {
	const Routes = () =>
		useRoutes(
			[
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "skills",
					element: <Skills />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
			]
				.concat(
					["portfolio", "portfolio/:tag", "portfolio/:tag/:id"].map(
						(path) => ({
							path: path,
							element: <Portfolio />,
						})
					)
				)
				.concat(
					["blog", "blog/:id"].map((path) => ({
						path: path,
						element: <Blog />,
					}))
				)
		)

	return (
		<Router>
			<Container className="gutter-top gutter-bottom">
				<Row className="sticky-parent">
					<Sidebar />
					<Col xl={9} md={12}>
						<div className="box-outer">
							<Navigation />
							<Routes />
						</div>
					</Col>
				</Row>
			</Container>
		</Router>
	)
}

export default App
