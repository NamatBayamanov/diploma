import { Route, Routes } from "react-router-dom";
import Allandroid from "./pages/Allandroid";
import Alliphones from "./pages/Alliphones";
import Faq from "./pages/Faq";
import Mainpage from "./pages/Mainpage";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Androids from "./pages/Android/Android";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
function App() {
  return (
    <div className="App">
      
      <Layout>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/allandroid" element= {<Allandroid/>}/>

          <Route path="/allandroid/:productId" element= {<Androids/>}/>

          <Route path="/categories" element= {<Categories/>}/>

          <Route path="/categories/:categoryId" element= {<Category/>}/>

          <Route path="alliphones" element={<Alliphones/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>


    </div>
  );
}

export default App;
