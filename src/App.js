import { BrowserRouter, Route, Routes } from "react-router-dom"
import ArticleCard from "./components/ArticleCard"
import Main from "./components/Main"
import Homepage from "./pages/Homepage"
import Article from "./pages/Article"


const App = () => {



  return(
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/article" element={<Article/>} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App