import React from 'react';
import { Navbar } from 'react-bootstrap';
import Auth from '../../utils/auth';
import Chat from '../../components/Chat/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'
const FooterItems = [
    {
      title: "",
      url: "https://github.com/parents-only/parents-only/",
      cName: "footer-links",
      icon: <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
    },
    {
      title: "",
      url: "",
      cName: "footer-links",
      icon: <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
    },
    {
        title: "",
        url: "",
        cName: "footer-links",
        icon: <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      },

  ];
  
  class Footer extends React.Component {
    state = { clicked: false };
  
    handleClick = () => {
      this.setState({ clicked: this.state.clicked });
    };
  
    render() {
      return (
          
        <Navbar bg='dark' variant='dark' expand='lg'  >
        <ul style={{ color: "white" }}>© Parents Only</ul>

        {
            Auth.loggedIn() ? (
                <>
                    <Chat />
                </>
            ) : (
                    <>
                    <Chat />
                    </>
                )
        }
       
          <ul
            className={this.state.clicked ? "footer-menu active icons" : "footer-menu"}
          >
            {FooterItems.map((item, index) => {
              return (
                <p key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                    {item.icon}
                  </a>
                </p>
              );
            })}
          </ul>
  
        </Navbar>
      );
    }
  }
  
export default Footer;

// const Footer = () => {

//     return (
//         <Navbar bg='dark' variant='dark' expand='lg' fixed="sticky" >
//             <ul style={{ color: "white" }}>© Parents Only</ul>

//             {
//                 Auth.loggedIn() ? (
//                     <>
//                         <Chat />
//                     </>
//                 ) : (
//                         <>
//                         <Chat />
//                         </>
//                     )
//             }
//         </Navbar>
//     )
// }

// export default Footer;