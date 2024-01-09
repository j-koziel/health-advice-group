import { Input } from "../components/Input";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", duration: 0.5 } }}
      className="h-4/5 w-1/4 flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-lg text-foreground shadow-2xl transition-opacity"
    >
      <h1 className="text-5xl m-0 ">Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard");
        }}
        className="h-2/3 w-full flex flex-col justify-evenly items-center"
      >
        <Input type="text" placeholder="John Doe" id="name" labelText="Name" />
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
        <Input
          type="password"
          placeholder="••••••••"
          labelText="Confirm password"
          id="confirm-password"
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
