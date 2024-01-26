import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "../components/Input";
import { config } from "../settings/config";
import { useAuth } from "../context/AuthContext";

export function SignInForm({setAuthError}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useAuth();
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
          try {
            e.preventDefault();
            setAuthError(null)
          const res = await axios.post(
            `${config.backendUrl}/api/v1/users/token`,
            {
              username: email,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          localStorage.setItem("accessToken", res.data.access_token);
          setAccessToken(res.data.access_token);

          navigate("/dashboard");
          return
          } catch (err) {
            console.log(err.response.data.detail)
            setAuthError(err.response.data.detail)
          }
          
        }}
        className="h-1/2 w-full flex flex-col justify-evenly items-center"
      >
        <Input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          labelText="Email"
          className="flex flex-col w-3/4 gap-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="••••••••"
          labelText="Password"
          id="password"
          className="flex flex-col w-3/4 gap-2"
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
        <span>
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="underline transition-all hover:font-bold"
          >
            Sign up!
          </a>
        </span>
      </form>
    </motion.div>
  );
}
