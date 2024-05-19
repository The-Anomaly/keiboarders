import React from "react";
import { Home } from "pages";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        let pos = element.style.position;
        let top = element.style.top;
        element.style.position = "relative";
        element.style.top = "-100px";
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.style.top = top;
        element.style.position = pos;
      }
    }
  }, [pathname, hash]);
  return <Home />;
}

export default App;
