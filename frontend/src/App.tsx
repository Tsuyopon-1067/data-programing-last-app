import { Architecture } from "@mui/icons-material";
import "./App.css";
import { Slide } from "./components/pages/Slide";
import { TimeLineLinkList } from "./components/pages/TimelineLinkList";
import { Xframe } from "./components/templetes/Xframe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TechStack } from "./components/pages/TechStack";
import { Qr } from "./components/pages/Qr";
import { createContext, useEffect, useState } from "react";
import { Responsive } from "./types/responsivie";
import { useWindowWidth } from "./hooks/UseWindowWidth";

interface ResponsiveContextType {
  value: Responsive;
  setValue: React.Dispatch<React.SetStateAction<Responsive>>;
}
export const ResponsiveContext = createContext<
  ResponsiveContextType | undefined
>(undefined);

function App() {
  const [responsive, setResponsive] = useState<Responsive>("pc");
  const width = useWindowWidth();
  useEffect(() => {
    if (width < 810) {
      setResponsive("mobile");
    } else if (width < 1150) {
      setResponsive("tablet");
    } else {
      setResponsive("pc");
    }
  }, [width]);
  return (
    <>
      <ResponsiveContext.Provider
        value={{ value: responsive, setValue: setResponsive }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Xframe />}>
              <Route path="/" element={<TimeLineLinkList />} />
              <Route path="/slide" element={<Slide />} />
              <Route path="/techStack" element={<TechStack />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/qr" element={<Qr />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ResponsiveContext.Provider>
    </>
  );
}

export default App;
