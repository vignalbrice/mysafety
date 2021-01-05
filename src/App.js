import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import appStore from "./app-store.png";
import googleStore from "./google-play.png";
import Card from "./components/Card/Card";
import { BiHomeHeart } from "react-icons/bi";
import { HiOutlineLocationMarker, HiDownload } from "react-icons/hi";
import { VscPerson } from "react-icons/vsc";
import { ImWoman } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import CardPrice from "./components/CardPrice/CardPrice";
import { FaCheck, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="app">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="header">
        <div className="header-slogan">
          <div className="slogan-logo">MySafety</div>
          <div className="slogan">Your safety is our priority !</div>
          <div className="stores">
            <a href="#appstore" className="store">
              <img src={appStore} alt="appstore" />
            </a>
            <a href="#playstore" className="store">
              <img src={googleStore} alt="playstore" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-about" id="about">
          <h3>MySafety - Qu'est ce que c'est ?</h3>
          <p>
            MySafety est une application inédite, pensée par des femmes pour des
            femmes. Avec une version gratuite et premium, l’application a été
            créer sur la base d’une experience personnelle de peur de marcher
            seule la nuit ou de rentrer seule. Selon les dernières études, les
            femmes ne se sentent pas en sécurité dans les choix quotidiens
            simples mais nécessaire à la vie. Simple d’utilisation, il suffit de
            régler votre préférence (appuyer trois fois ou deux fois sur le
            bouton volume ou power de votre smartphone) pour envoyer
            automatiquement un message aux contacts de votre choix ainsi que
            prévenir les autorités en précisant votre localisation et le
            déplacement de votre smartphone (si repérable).
          </p>
          <h3 className="step">MySafety - En 3 étapes</h3>
          <div className="card-section">
            <Card>
              <VscPerson size={64} color="#fd79a8" />
              <h4 className="card-title pink">Je sors !</h4>
              <p className="card-text">
                Un service de géolocalisation des déplacements, transmis à des
                personnes de confiance, choisies par l’utilisatrice.
              </p>
            </Card>
            <Card>
              <HiOutlineLocationMarker size={64} color="#d63031" />
              <h4 className="card-title red">Ma localisation</h4>
              <p className="card-text">
                Les autorités sont prévenues lorsque votre localisation est
                envoyés ! Ils reçoivent un signal gps pour suivre vos
                déplacements.
              </p>
            </Card>
            <Card>
              <BiHomeHeart size={64} color="#2980b9" />
              <h4 className="card-title blue">Je rentre !</h4>
              <p className="card-text">
                Une fois en sécurité, avec vos proches ou des membres des forces
                de l'ordres vous pouvez rentrez sereienement chez vous.
              </p>
            </Card>
          </div>
        </div>
        <div className="section-banner">
          <div className="ban-part">
            <ImWoman size={48} color="#f7f7f7" />
            <p className="ban-title">86%</p>
            <p className="ban-text">
              Des Françaises victimes d'attouchements sexuels, aggressions ou
              caresses
            </p>
          </div>
          <div className="ban-part">
            <HiDownload size={48} color="#f7f7f7" />
            <p className="ban-title">40,000</p>
            <p className="ban-text">Téléchargements</p>
          </div>
          <div className="ban-part">
            <BsPeopleFill size={48} color="#f7f7f7" />
            <p className="ban-title">+100%</p>
            <p className="ban-text">
              D'utilisateurs recommande MySafety depuis le 1er décembre 2020
            </p>
          </div>
        </div>
        <div className="section-offers" id="offers">
          <h3 className="offers purple-dark">MySafety - Nos offres</h3>
          <p>
            Rejoignez la communauté de ceux qui veulent rendre nos villes plus
            sûres, et redonner envie à tous, de sortir en toute sécurité.
            L’application entièrement gratuite et disponible partout en France
            est téléchargeable dès maintenant dans l’App store d’Apple et
            Google.
          </p>
          <div className="card-price-section">
            <CardPrice>
              <h5 className="card-price-title basic">Basique</h5>
              <hr className="line" />
              <p className="pricing">Free</p>
              <p className="card-price-text">
                <FaCheck style={{ marginRight: 6 }} />
                Visibilité locale
              </p>
              <a href="#select" className="select select-basic">
                Selectionner
              </a>
            </CardPrice>
            <CardPrice>
              <h5 className="card-price-title">Premium</h5>
              <hr className="line" />
              <p className="pricing">4.99€ / an</p>
              <p className="card-price-text">
                <FaCheck style={{ marginRight: 6 }} />
                Alarme portable (choix coloris)
              </p>
              <p className="card-price-text">
                <FaCheck style={{ marginRight: 6 }} />
                Repérage de point d'abris
              </p>
              <p className="card-price-text">
                <FaCheck style={{ marginRight: 6 }} />
                Cartographie des endroits sûrs
              </p>
              <a href="#select" className="select">
                Selectionner
              </a>
            </CardPrice>
          </div>
        </div>
        <div className="section-team">
          <h3 className="blue">MySafety - L'équipe</h3>
          <div className="team-item">
            <div>
              <figure>
                <img src="./IMG_4117.jpg" alt="lea_chouaib" />
              </figure>
              <p className="name">Léa Chouaib</p>
              <p className="jobtype">Directrice Juridique</p>
              <div className="network">
                <a href="https://www.linkedin.com/in/l%C3%A9a-chouaib-6588101b9/">
                  <FaLinkedinIn size={26} />
                </a>
                <a href="mailto:lea_cheaib@hotmail.com">
                  <FaRegEnvelope size={25} />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <img src="./IMG_9576.jpg" alt="sevil_hiz" />
              </figure>
              <p className="name">Sevil Hiz</p>
              <p className="jobtype">Directrice Générale</p>
              <div className="network">
                <a href="mailto:sevil2197@gmail.com">
                  <FaRegEnvelope size={25} />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <img src="./IMG_9577.jpg" alt="kallia_marilou_kampori" />
              </figure>
              <p className="name">Kallia Marilou Kampouri</p>
              <p className="jobtype">Directrice Marketing</p>
              <div className="network">
                <a href="https://www.linkedin.com/in/marilou-kallia-kampouri-ba0b881b6">
                  <FaLinkedinIn size={26} mar />
                </a>
                <a href="mailto:kallia961@hotmail.com">
                  <FaRegEnvelope size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-contact" id="contact">
          <h3 className="purple-light">MySafety - Contact</h3>
          <ContactForm />
        </div>
        <div className="section-questions" id="questions">
          <h3 className="blue-light">MySafety - Des Questions ?</h3>
          <p>Pour tout types de questions contactez-nous à l'adresse </p>
          <a href="mailto:contact@mysafety.com">contact@mysafety.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
