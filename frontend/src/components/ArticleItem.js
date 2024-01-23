export function ArticleItem({ title, imageUrl }) {
  return (
    <div className="border border-solid border-primary rounded-md">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
