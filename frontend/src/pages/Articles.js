import { useEffect, useState } from "react";

import { ArticleItem } from "../components/ArticleItem";
import { getArticles } from "../utils/get-data";

export function Articles() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const getAndSetArticlesData = async () => {
      setArticleData([...(await getArticles())]);
    };

    getAndSetArticlesData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-background text-foreground">
      <h1 className="font-bold text-4xl mb-4 sm:text-6xl md:text-7xl lg:text-9xl">
        Health Advice Articles
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {articleData &&
          articleData.map((article, i) => {
            return <ArticleItem key={i} article={article} />;
          })}
        {!articleData && <div>Loading articles...</div>}
      </div>
    </div>
  );
}
