import Cookies from "js-cookie";

const useServerDarkMode = (defaultTheme = "dark") => {
  return Cookies.get("theme") ?? defaultTheme;
};

export default useServerDarkMode;
