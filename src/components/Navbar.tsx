import { config } from "../config"

function Navbar() {
  /*const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });*/
          
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">NOW MATTERS</a>

          <button className="mobile-menu" id="menuButton" aria-label="Open menu" aria-expanded="false">
            ☰
          </button>

          <nav className="nav-links" id="navLinks">
            <a href="#philosophy">About</a>
            <a href="#token">Token</a>
            <a href="#wallet">Reminder</a>
            <a href="#value">Value</a>
            <a className="button" target="_blank" href={config.links.uniswap}>
              Get $NOW
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
