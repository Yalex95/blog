import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import AuthForm from "../components/authForm";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="text-center">
        <Badge color="primary">
          <MailIcon color="action" />
        </Badge>
        <h1>Lumina</h1>
        <p>the focused Canvas for Authors</p>
        <AuthForm>
          <h2>Welcome back to limuna</h2>
          <p>Please enter yout details to coninue your journey</p>
        </AuthForm>
      </div>
    </div>
  );
}
