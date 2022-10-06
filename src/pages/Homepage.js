import { Link } from "react-router-dom"
import { useAllPrismicDocumentsByType} from "@prismicio/react"
import SmallArticleCard from "../components/SmallArticleCard"
import H1 from "../components/H1"
import H3 from "../components/H3"

const Homepage = () => {
  const [articles] = useAllPrismicDocumentsByType('article')


  return(
    <div>
      <H1 className="mb-4">Homepage</H1>
      <H3 className="mb-4">Articles</H3>
      <section className="flex flex-col gap-3">
        {articles && (
          articles.map((article) => {
            return(
              <Link to={`/${article.id}`} key={article.id}>
                <SmallArticleCard article={article}/>
              </Link>
            )
          })
        )}
      </section>
    </div>
  )
}

export default Homepage

