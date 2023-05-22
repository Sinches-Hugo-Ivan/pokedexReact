import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <h3>Sinches Developer</h3>
        <p>“Tengo que ser siempre el mejor, mejor que nadie más”</p>
        <ul class="socials">
          <li>
            <a
              href="https://www.linkedin.com/in/hugo-iván-sinches/"
              target="_blank"
            >
              <i class="fa fa-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sinches-Hugo-Ivan/"
              target="_blank"
            >
              <i class="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy;{" "}
          <a
            href="https://github.com/Sinches-Hugo-Ivan/"
            target="_blank"
          >
            Sinches Developer
          </a>{" "}
        </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li>
              <a href="https://walink.co/82398d" target="_blank">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
