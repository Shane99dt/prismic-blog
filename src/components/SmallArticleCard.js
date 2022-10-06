import H3 from "./H3"
import { PrismicRichText} from "@prismicio/react"


const SmallArticleCard = ({article}) => {

  return(
    <div className="border border-black rounded ">
        <h1>
          <PrismicRichText field={article.data.article_title} />
        </h1>
        <div className="">
          <span>written by:</span> <PrismicRichText field={article.data.article_author} />
        </div>
    </div>
  )
}

export default SmallArticleCard