// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faRemove } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// Importing styles
import "./../styles/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__site">
          <p>Lima, Perú</p>
        </div>
        <div className="follow--footer">
          <a
            href="https://github.com/sskaren1"
            className="follow__icon"
            title="Developer's Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/karen-obispo-campos"
            className="follow__icon"
            title="Developer's LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer__copyright">
          <p>
            Copyright &copy; 2022 All Rights Reserved - Designed by Karen Obispo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
