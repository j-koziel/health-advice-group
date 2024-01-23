export function ArticleItem({ title, imageUrl }) {
  return (
    <div className="border border-solid border-primary rounded-md">
      <div className="h-[100px] w-[200px]">
        <img src={imageUrl} alt={title} className="object-fit" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
