import React, { useEffect, useState } from "react";

const NavLinks = ({ gap }) => (
  <ul className={`d-flex ${gap} navbar-nav`}>
    <li>
      <a className="text-dark-gray text-decoration-none" href="#">
        Sobre
      </a>
    </li>
    <li>
      <a className="text-dark-gray text-decoration-none" href="#">
        Artistas
      </a>
    </li>
    <li>
      <a className="text-dark-gray text-decoration-none" href="#">
        Blog
      </a>
    </li>
  </ul>
);

const AuthButtons = () => (
  <>
    <button className="btn-border-primary btn-primary-format me-2" type="button">
      Login
    </button>
    <button className="border-0 btn-primary-format btn-gradient text-white" type="button">
      Cadastra-se
    </button>
  </>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1030, 
    boxShadow: scrolled ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
    transition: "all 0.3s ease",
  };

  const logoUrl = "./images/structure/Logo.png";
  const searchIconUrl = "./images/structure/search.svg";
  const menuIconUrl = "./images/structure/bar.svg";

  return (
    <header style={headerStyle} className="bg-white border-bottom navbar navbar-expand-xxl">
      <div className="align-items-center container d-flex gap-3 gap-sm-5 justify-content-between">
        <div className="container-logo">
          <img src={logoUrl} alt="Logo Indicart" />
        </div>

        <nav className="d-none d-xxl-flex">
          <NavLinks gap="gap-5" />
        </nav>

        <div className="container-search">
          <input
            className="border-2 border-darker-gray10 form-control search-input text-darker-gray50 w-100"
            type="text"
            placeholder="Pesquisa"
            aria-label="Pesquisar"
          />
          <img className="search-icon" src={searchIconUrl} alt="Ícone de pesquisa" />
        </div>

        <div className="d-none d-xl-flex">
          <AuthButtons />
        </div>

        <div className="container-mobile flex-row gap-3 relative">
          <button className="border-0 btn-search navbar-toggle" type="button" aria-label="Pesquisar">
            <img src={searchIconUrl} alt="Ícone de pesquisa" />
          </button>

          <button
            className="border-2 border-darker-gray10 navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuIconUrl} alt="Ícone de menu" />
          </button>
        </div>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <nav className="d-flex d-xxl-none">
            <NavLinks gap="gap-3" />
          </nav>

          <div className="d-flex d-xl-none mt-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
