function applyStoredTheme() {
    //when loading:
    // get saved value of localStorage
    const currentTheme = localStorage.getItem("theme");
    // if exist: setAttribute
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    } 
    // if not: do nothing
}

applyStoredTheme();