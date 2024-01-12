import { useState } from "react";
import { Input } from "../components/Input";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", duration: 0.5 } }}
      className="h-3/5 w-1/4 flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-md text-foreground shadow-2xl transition-opacity"
    >
      <h1 className="text-5xl m-0 ">Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(email);
          console.log(password);
          const res = await axios.post(
            "http://localhost:8000/api/v1/users/token",
            {
              username: email,
              password: password,
            },
            {headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }}
          );

          localStorage.setItem("jwtToken", res.data.access_token);
          console.log(localStorage.getItem("jwtToken"));

          navigate("/dashboard");
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
          // minLength={8}
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
