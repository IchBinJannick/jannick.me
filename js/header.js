import toggleMode from "./lightdarkmode.js";


class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <header>
                <nav aria-label="Main">
                    <a href="/">Jannick.Me</a>
                    <ul id="nav-menu">
                        <li><a href="/" class="nav-link">Start</a></li>
                        <li><a href="/site/projects" class="nav-link">Projects</a></li>
                        <li><a href="/site/about" class="nav-link">About</a></li>
                        <li><a href="/site/contact" class="nav-link">Contact</a></li>
                        <li><button id="theme-toggle" aria-label="Toggle theme">Toggle theme</button></li>
                    </ul>
                </nav>
            </header>
        `;
        const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
        this.querySelectorAll(".nav-link").forEach((link) => {
            const linkPath = new URL(link.href).pathname.replace(/\/+$/, "") || "/";

            if (linkPath === currentPath) {
                link.setAttribute("aria-current", "page");
                link.classList.add("active");
            }
        })

        const themeButton = this.querySelector("#theme-toggle");
        themeButton.addEventListener("click", toggleMode);
    }
}

customElements.define('site-header', SiteHeader);