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

export default function toggleMode() {
    // when clicking button:
        // read current state
        const currentTheme = localStorage.getItem("theme");
        // determine new state (opposite or next cyclic state)
        let nextTheme = "dark";
        if (currentTheme === "dark") {
            nextTheme = "light";
        }
        // setAttribute
        document.documentElement.setAttribute("data-theme", nextTheme);
        // safe in localStorage
        localStorage.setItem("theme", nextTheme);
        // change Button design
    //location.reload();
}