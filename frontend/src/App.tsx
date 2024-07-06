import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Architecture } from "./components/pages/Architecture";
import { CodeRunner } from "./components/pages/CodeRunner";
import { Csv } from "./components/pages/Csv";
import { Qr } from "./components/pages/Qr";
import { Slide } from "./components/pages/Slide";
import { TechStack } from "./components/pages/TechStack";
import { TimeLineLinkList } from "./components/pages/TimelineLinkList";
import { WordCloud } from "./components/pages/WordCloud";
import { Xframe } from "./components/templetes/Xframe";
import { useWindowWidth } from "./hooks/UseWindowWidth";
import { Responsive } from "./types/responsivie";

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
              <Route path="/wordcloud" element={<WordCloud />} />
              <Route path="/coderunner" element={<CodeRunner />} />
              <Route path="/csv" element={<Csv />} />
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
