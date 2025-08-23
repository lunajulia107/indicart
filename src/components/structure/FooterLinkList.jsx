import React from "react"; 

const SocialIcon = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};  

const FooterLinkList = ({ navTitle, links, newTab }) => {
  return (
    <div>
      <div className="gap-3">
      <h3>{navTitle}</h3>
      <ul className="gap-3">
        {links.map((link, index) => (
          <li key={index}> 
            <a className="text-dark-gray" href={link.url}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}>
              <SocialIcon svg={link.text} />
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default FooterLinkList; 

