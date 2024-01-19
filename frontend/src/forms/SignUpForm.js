import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "../components/Input";
import { useAuth } from "../context/AuthContext";
import { config } from "../settings/config";

export function SignUpForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { setAccessToken } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeIn", duration: 0.5 } }}
      className="flex flex-col items-center justify-evenly bg-background border-solid border-foreground border-2 rounded-lg text-foreground shadow-2xl transition-opacity p-20"
    >
      <h1 className="text-5xl m-0 mb-4">Sign Up</h1>
      <form
        onSubmit={async (e) => {
          try {
            setError(false);
            e.preventDefault();

            const res = await axios.post(`${config.backendUrl}/api/v1/users`, {
              name,
              email,
              password,
            });

            console.log(res.data);

            setAccessToken(res.data.access_token);
            localStorage.setItem("accessToken", res.data.access_token);

            navigate("/dashboard");
          } catch (err) {
            setError(true);
          }
        }}
        className="h-full w-full flex flex-col gap-y-5 justify-evenly items-center"
      >
        <Input
          type="text"
          placeholder="John Doe"
          id="name"
          labelText="Name"
          className="flex flex-col gap-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          maxLength={100}
          required
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          labelText="Email"
          className="flex flex-col gap-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          maxLength={100}
          required
        />
        <Input
          type="password"
          placeholder="••••••••"
          labelText="Password"
          id="password"
          className="flex flex-col gap-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          minLength={8}
          maxLength={100}
          required
        />
        <Input
          type="password"
          placeholder="••••••••"
          labelText="Confirm password"
          id="confirm-password"
          className="flex flex-col gap-2"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
          value={passwordConfirm}
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
