function applyStoredTheme() {
    //when loading:
    // get saved value of localStorage
    const currentTheme = localStorage.getItem("theme");
    // if exist: setAttribute
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = systemPrefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute("data-theme", defaultTheme);
    }
}

applyStoredTheme();