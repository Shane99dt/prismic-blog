import { usePrismicDocumentByUID } from "@prismicio/react"
import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"
import H1 from "../components/H1"

const Article = () => {
  const [article, { state }] = usePrismicDocumentByUID('article', 'Yz7Q2hAAACQAb9hM')
  console.log(article, "jhe")
  return(
    <div>
      <H1 className="mb-4">Article</H1>
      <ArticleCard/>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Article