import { useState } from "react";
import { Input } from "../components/Input";
import { motion } from "framer-motion";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", duration: 0.5 } }}
      className="h-3/5 w-1/4 flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-md text-foreground shadow-2xl transition-opacity"
    >
      <h1 className="text-5xl m-0 ">Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
          console.log(email);
          console.log(password);
        }}
        className="h-1/2 w-full flex flex-col justify-evenly items-center"
      >
        <Input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          labelText="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="••••••••"
          labelText="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          maxLength={100}
          required
        />
        <input
          type="submit"
          value="Sign In"
          className="text-xl bg-secondary text-primary p-2 rounded-md cursor-pointer hover:shadow-xl hover:bg-altBackground hover:text-altForeground transition-all"
        />
      </form>
    </motion.div>
  );
}
