import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],//Trying to fetch the authenticated user
    queryFn: getAuthUser,
    retry: false, // this is authentication check so we dont want want the UseQuery to check multiple times
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};
export default useAuthUser;
