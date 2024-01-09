export function SignInForm() {
  return (
    <div className="h-2/3 w-1/4 flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-md text-foreground">
      <h1 className="text-5xl">Sign In</h1>
      <form className="h-1/2 w-full flex flex-col justify-evenly items-center">
        <div className="flex flex-col w-3/4 gap-2">
          <label labelFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-background border-solid border-foreground border-2 p-2 rounded-md"
            placeholder="example@gmail.com"
          />
        </div>

        <input />
        <input type="submit" />
      </form>
    </div>
  );
}
