import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
