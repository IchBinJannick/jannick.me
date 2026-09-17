class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
            <header>
                <nav>
                    <ul>
                        <li><a href="/" class="nav-link">Start</a></li>
                        <li><a href="/site/projects" class="nav-link">Projects</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);