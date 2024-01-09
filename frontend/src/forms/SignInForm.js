import { Input } from "../components/Input";
import { motion } from "framer-motion";

export function SignInForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", duration: 0.5 } }}
      className="h-3/5 w-1/4 flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-md text-foreground shadow-2xl transition-opacity"
    >
      <h1 className="text-5xl m-0 ">Sign In</h1>
      <form className="h-1/2 w-full flex flex-col justify-evenly items-center">
        <Input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          labelText="Email"
        />

        <Input
          type="password"
          placeholder="••••••••"
          labelText="Password"
          id="password"
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
