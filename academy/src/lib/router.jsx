import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);
const base = "/khoahoc";

const currentPath = () => {
  const pathname = window.location.pathname;
  if (!pathname.startsWith(base)) return "/";
  return pathname.slice(base.length) || "/";
};

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const update = () => setPath(currentPath());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const navigate = (to, { replace = false } = {}) => {
    const destination = `${base}${to === "/" ? "" : to}`;
    window.history[replace ? "replaceState" : "pushState"]({}, "", destination);
    setPath(to);
    window.scrollTo(0, 0);
  };
  const value = useMemo(() => ({ path, navigate }), [path]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

export function Link({ to, children, className, ...props }) {
  const { navigate } = useRouter();
  return <a href={`${base}${to === "/" ? "" : to}`} className={className} onClick={(event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  }} {...props}>{children}</a>;
}
