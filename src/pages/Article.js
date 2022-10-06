import { usePrismicDocumentByUID } from "@prismicio/react"
import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"
import { useParams } from "react-router-dom"

const Article = () => {
  const {id} = useParams()
  const [article] = usePrismicDocumentByUID('article', id)


  if(!article){
    return <p>Loading...</p>
  }

  return(
    <div>
      <div className="mb-5 font-medium">
        <Link to={'/'}>Home</Link>
      </div>
      <ArticleCard document={article}/>
    </div>
  )
}

export default Article