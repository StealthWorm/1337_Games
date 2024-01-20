import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { LayoutContextProvider } from "./contexts/LayoutContext";

export function App() {
  return (
    <BrowserRouter>
      <LayoutContextProvider>
        <Router />
      </LayoutContextProvider>
    </BrowserRouter>
  )
}
