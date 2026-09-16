class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Start</a></li>
                        <li><a href="projects.html">Projects</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);