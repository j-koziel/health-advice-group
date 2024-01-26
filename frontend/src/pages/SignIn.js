import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify"

import { SignInForm } from "../forms/SignInForm";

export function SignIn() {
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    if (authError) toast.error(authError)
  }, [authError])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-background">
      <SignInForm setAuthError={setAuthError}/>
      <ToastContainer/>
    </div>
  );
}
