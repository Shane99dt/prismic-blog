import { PrismicRichText } from "@prismicio/react"


const ArticleCard = ({document}) => {
  return(
    <div>
      {document && (
        <>
          <div className="text-3xl font-medium mb-3 first-letter:capitalize">
            <PrismicRichText field={document.data.article_title} />
          </div>
          <PrismicRichText field={document.data.article_body} />
          <div className="flex flex-row mt-3">
            <span className="mr-2">Written by :</span>
            <div className="font-medium">
              <PrismicRichText field={document.data.article_author} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ArticleCard