import { useEffect, useState } from "react";

import { ArticleItem } from "../components/ArticleItem";
import { getArticles } from "../utils/get-data";
import { config } from "../settings/config";

export function Articles() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const getAndSetArticlesData = async () => {
      setArticleData([...(await getArticles())]);
    };

    getAndSetArticlesData();
  });

  return (
    <div className="flex flex-col items-center bg-background text-foreground">
      <h1 className="text-9xl">Health Advice Articles</h1>
      <div className="flex flex-wrap">
        {articleData &&
          articleData.map((article, i) => (
            <ArticleItem
              key={i}
              title={article.title}
              imageUrl={`${config.backendUrl}${article.title_image_path}`}
            />
          ))}
      </div>
    </div>
  );
}
