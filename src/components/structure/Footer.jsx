import React from "react";
import FooterLinkList from "./FooterLinkList";
import FooterLinks from '../../json/footerLinks'; 

const Footer = () => {
  return ( 
    <footer className="bg-light-gray w-100">
      <div className="container footer-informations1 gap-4">
        <a
          className="ff-roundend gap-3 indicart text-dark-gray text-decoration-none"
          href="/"
        >
          <div>
            <img
              src="./images/structure/Logo2.png"
              alt="Logotipo da Indicart com ícone de pincel e seta gradiente roxo, acompanhado pelo letreiro 'Indicart'"
            />
          </div>
          <p>Conectando artistas e amantes de arte.</p>
        </a>

        <nav className="gap-5">
          <FooterLinkList
            navTitle="Junte-se a nós!"
            links={FooterLinks.column1Links}
          />
          <FooterLinkList
            navTitle="Para Indicartistas"
            links={FooterLinks.column2Links}
          />
          <FooterLinkList
            navTitle="Amantes de artes"
            links={FooterLinks.column3Links}
          />
          <FooterLinkList navTitle="Ajuda" links={FooterLinks.column4Links} />
        </nav>
      </div>

      <div className="border-darker-gray10 footer-informations2">
        <div className="container">
          <p className="gap-1">
            @Indicart 2023 <span>by @legalmenteDesigners</span>
          </p>

          <nav className="social-medias">
            <FooterLinkList
              navTitle="Encontre-nos"
              links={FooterLinks.column5Links}
            />
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
