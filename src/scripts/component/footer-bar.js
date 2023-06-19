class FooterBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="title-footer">
        <p tabindex="0">Copyright &copy 2023 - Lupis Restaurant (Vega Putra Dwi Agni - F144XB43)</p>
      </div>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);