import { memo } from "react";
import { AuthorizationForm } from "../../modules/AuthorizationForm";

interface IAuthorizationPageProps {
  className?: string;
}

export const AuthorizationPage = memo((props: IAuthorizationPageProps) => {
  return (
    <div>
      <AuthorizationForm />
    </div>
  );
});
