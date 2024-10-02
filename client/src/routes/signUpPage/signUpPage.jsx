import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <SignUp path="/sign-up" signInUrl="sign-in"/>
    </div>
  );
};

export default SignUpPage;
