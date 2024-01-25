import { useNavigate } from "react-router-dom";

import { config } from "../settings/config";

export function ArticleItem({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="border-2 border-solid border-primary rounded-md flex flex-col items-center cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
      onClick={() => {
        navigate(`/articles/${article.title}`);
      }}
    >
      <div className="h-[100px] w-[400px] overflow-hidden relative select-none">
        <img
          src={`${config.backendUrl}${article.title_image_path}`}
          alt={article.title}
          className="w-full h-full object-cover object-center absolute top-0 left-0"
        />
      </div>
      <h2 className="font-bold text-4xl p-2 select-none">{article.title}</h2>
    </div>
  );
}
