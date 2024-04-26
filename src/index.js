import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalsComponent from "./Components/useGlobals"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-photoswipe/lib/photoswipe.css"
import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<GlobalsComponent>
			<App />
		</GlobalsComponent>
	</React.StrictMode>
)
