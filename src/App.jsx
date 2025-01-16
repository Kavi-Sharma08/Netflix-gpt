import { BrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Browse from "./components/Browse"
import { Provider } from "react-redux"
import appstore from "./utils/appStore"

function App() {
  return (
    <Provider store={appstore}>
      
      <Body />
      
    </Provider>

  )
}

export default App
