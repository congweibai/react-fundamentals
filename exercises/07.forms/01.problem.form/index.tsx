import { createRoot } from 'react-dom/client'

function App() {
	// 🐨 render a form
	//   🐨 render a "Username" label
	//   🐨 render an input with the name "username"
	//   🐨 render a button
	// 💯 associate the label to the input using htmlFor and id attributes
	// 💯 explicitly set the button type appropriately
	return (
		<form>
			<label htmlFor="username">Username:</label>
			<input id="username" name="username" />
			<div>
				<button>Submit</button>
			</div>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
