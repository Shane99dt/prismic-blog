import H1 from "./H1"
import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType} from "@prismicio/react"


const ArticleCard = ({}) => {
  const [document] = useFirstPrismicDocument()
  const [article] = useAllPrismicDocumentsByType('article')
  console.log(article)
  // console.log(document)
  return(
    <div>
      <H1></H1>
      {document && (
        <>
          <PrismicRichText field={document.data.article_title} />
          <PrismicRichText field={document.data.article_body} />
          <PrismicRichText field={document.data.article_author} />
        </>
      )}
    </div>
  )
}

export default ArticleCard