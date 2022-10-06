import { Link } from "react-router-dom"
import { PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react"
import SmallArticleCard from "../components/SmallArticleCard"
const Homepage = () => {
  const [articles] = useAllPrismicDocumentsByType('article')
  console.log(articles)


  return(
    <div>
      Homepage
      <div>
        {}
        <Link to={'/article'}>Articles</Link>
      </div>
      <section className="flex flex-col gap-3">
        {articles && (
          articles.map((article) => {
            return <SmallArticleCard key={article.id} article={article}/>
          })
        )}
      </section>
    </div>
  )
}

export default Homepage

