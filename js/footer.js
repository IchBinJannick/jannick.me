class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <footer>
            <p>© 2026 <a href="https://github.com/IchBinJannick">Jannick</a></p>
            <a href="https://github.com/IchBinJannick/jannick.me">GitHub</a>
        </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);