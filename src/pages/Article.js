import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"

const Article = () => {
  return(
    <div>
      Article

      <ArticleCard/>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Article