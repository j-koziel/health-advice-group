import Link from "next/link";

export function Footer() {
  return (
    <div className="h-screen w-full flex flex-col bg-background text-center">
      <div className="border-b-2 border-foreground h-36">
        <h1 className="font-bold text-9xl">Health Advice Group</h1>
      </div>
      <div className="w-full h-full flex items-center justify-evenly">
        <Link
          href="/"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/weather-forecast"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Weather Forecast
        </Link>
        <Link
          href="/air-quality"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Air Quality
        </Link>
        <Link
          href="/sign-in"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Register
        </Link>
        <Link
          href="/articles"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Articles
        </Link>
        <Link
          href="/tncs"
          className="text-2xl p-4 hover:bg-foreground hover:text-background transition-colors"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
