export function Input({ type, placeholder, labelText, id, props }) {
  return (
    <div className="flex flex-col w-3/4 gap-2">
      <label labelFor={id} className="text-2xl">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className="bg-background border-solid border-foreground border-2 p-2 rounded-md hover:shadow-xl focus:shadow-2xl transition-shadow placeholder:text-foreground placeholder:opacity-60"
        placeholder={placeholder}
      />
    </div>
  );
}
