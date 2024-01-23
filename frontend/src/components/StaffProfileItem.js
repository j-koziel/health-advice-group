export function StaffProfileItem({ name, title, profileImageUrl }) {
  return (
    <div className="flex flex-col items-center">
      <img src={profileImageUrl} alt={name} width={300} height={300} />
      <div className="text-4xl">{name}</div>
      <div className="text-2xl opacity-60">{title}</div>
    </div>
  );
}
