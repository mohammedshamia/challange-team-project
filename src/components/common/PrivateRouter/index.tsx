import { AppState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequireAuth({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export function RequireAdmin({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const {
    user: { isAdmin },
  } = useSelector((state: AppState) => state.auth);

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}
