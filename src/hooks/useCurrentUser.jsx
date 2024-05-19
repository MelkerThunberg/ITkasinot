import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: () =>
      fetch("http://localhost:4000/auth/me", {
        method: "GET",
        credentials: "include",
      }).then((res) => (res.status === 401 ? null : res.json())),
  });

  const logout = () => {
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    refetch();
  };

  return { user, isLoading, logout, refetch };
};
