import H3 from "./H3"
import { PrismicRichText} from "@prismicio/react"


const SmallArticleCard = ({article}) => {

  return(
    <div className="border border-black rounded py-2 px-5">
        <div className="text-2xl font-medium">
          <PrismicRichText field={article.data.article_title} />
        </div>
        <div className="flex flex-row">
          <span className="mr-2">written by :</span><PrismicRichText field={article.data.article_author} />
        </div>
    </div>
  )
}

export default SmallArticleCard