export function ArticleItem({ title, imageUrl, setSelectedArticle }) {
  return (
    <div
      className="border-2 border-solid border-primary rounded-md flex flex-col items-center cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
      onClick={() => {
        setSelectedArticle(title);
      }}
    >
      <div className="h-[75px] w-[400px] overflow-hidden relative select-none">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center absolute top-0 left-0"
        />
      </div>
      <h2 className="font-bold text-4xl p-2 select-none">{title}</h2>
    </div>
  );
}
