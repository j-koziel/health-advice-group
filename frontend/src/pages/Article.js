import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { config } from "../settings/config";
import { getArticle } from "../utils/get-data";

export function Article() {
  const [articleData, setArticleData] = useState(null);

  const { title } = useParams();

  useEffect(() => {
    console.log(title);
    const getAndSetArticleData = async () => {
      setArticleData({ ...(await getArticle(title)) });
    };

    getAndSetArticleData();
  }, []);

  return (
    articleData && (
      <div className="bg-background text-foreground w-full flex flex-col">
        <article>
          <header className="mb-2">
            <div className="w-full h-[700px] relative overflow-hidden mb-2">
              <img
                src={`${config.backendUrl}${articleData.title_image_path_xl}`}
                alt={articleData.title}
                className="w-full h-full absolute top-0 left-0 object-cover object-center"
              />
            </div>
            <h1 className="font-bold text-5xl px-4">{articleData.title}</h1>
          </header>
          <main className="px-4">
            <p className="text-xl">{articleData.content}</p>
          </main>
        </article>
      </div>
    )
  );
}
