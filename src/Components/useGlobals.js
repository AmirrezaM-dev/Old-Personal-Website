import React, { useContext, useEffect } from "react"
const GlobalsContent = React.createContext()

export function useGlobals() {
	return useContext(GlobalsContent)
}

const GlobalsComponent = ({ children }) => {
	const useOutside = (ref, perform) => {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					perform()
				}
			}
			document.addEventListener("mousedown", handleClickOutside)
			return () => {
				document.removeEventListener("mousedown", handleClickOutside)
			}
		}, [perform, ref])
	}

	return (
		<GlobalsContent.Provider value={{ useOutside }}>
			{children}
		</GlobalsContent.Provider>
	)
}

export default GlobalsComponent
