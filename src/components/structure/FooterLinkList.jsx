import React from "react"; 

const SocialIcon = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};  

const FooterLinkList = ({ navTitle, links }) => {
  return (
    <div>
      <div className="gap-3">
      <h3>{navTitle}</h3>
      <ul className="gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a className="text-dark-gray" href={link.url}><SocialIcon svg={link.text} /></a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default FooterLinkList; 

