import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//import { PAGE_URL, getAccess, setAccess, AuthService } from "@/shared";

const queryClient = new QueryClient();

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  //const navigate = useNavigate();
  //const { getUserInfo } = AuthService();

  useEffect(() => {
    /* (async () => {
      const access_token = getAccess();
      if (!access_token) navigate(PAGE_URL.SignIn);
      else {
        setAccess(access_token);
        await getUserInfo();
      }
    })(); */
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AuthRouter;
