import { loremIpsum } from "lorem-ipsum";

export function TermsAndConditions() {
  return (
    <article className="w-full bg-background text-foreground flex flex-col items-center p-12">
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-5 md:text-7xl lg:text-9xl">
          Terms And Conditions
        </h1>
        <p className="text-xl mb-2">
          {loremIpsum({ count: 100, units: "words" })}
        </p>
      </header>
      <main className="text-xl mb-2">
        {loremIpsum({ count: 500, units: "words" })}
      </main>
      <footer className="text-xl">
        {loremIpsum({ count: 200, units: "words" })}
      </footer>
    </article>
  );
}
