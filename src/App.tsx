import DefaultHeader from "./components/default/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import HeaderSection from "./pages/headers";
import FooterSection from "./pages/footers";
import RoadmapSection from "./pages/roadmaps";
import SocialSection from "./pages/social";
import ButtonSection from "./pages/buttons";
import InputSection from "./pages/inputs";
import LinksSection from "./pages/links";
import InputField from "./pages/inputField";
import LogoSection from "./pages/logos/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DefaultHeader />
      <Routes>
        <Route path='/headers' element={<HeaderSection />} />
        <Route path='/footers' element={<FooterSection />} />
        <Route path='/roadmaps' element={<RoadmapSection />} />
        <Route path='/social' element={<SocialSection />} />
        <Route path='/buttons' element={<ButtonSection />} />
        <Route path='/inputs' element={<InputSection />} />
        <Route path='/links' element={<LinksSection />} />
        <Route path='/fieldslogofields' element={<LogoSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
