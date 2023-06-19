class JumboHero extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
          <div class="jumbotron">
              <div class="jumbo-inner">
                  <h1 class="jumbo-title">where reveluvs find food</h1>
                    <h3 class="jumbo-title">This Place is for find your favorite food</h3>
                      <p class="jumbo-tagline">Lupis Restaurant</p>
              </div>
          </div>
        `;
    }
  }
  
  customElements.define('jumbo-hero', JumboHero);  