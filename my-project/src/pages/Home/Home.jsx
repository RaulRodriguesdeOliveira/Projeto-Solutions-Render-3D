import foto1 from "/SOCIALScene 21.png";
import logoGrande from "/LOGO-TAMANHO-GRANDE.jpeg";
import regua from "/Regua.svg";
import pincel from "/Pincel.svg";
import urban from "/Urbano.svg";
import "./style.css";
import Navbar from "../../Components/Navbar.jsx";
import CarouselSection from "../../Components/CarouselSection.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <img src={foto1} alt="logo" className="foto1" />
        </div>
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-column gap-4 justify-content-center align-items-center  p-5"
            id="heroContainer"
          >
            <h1 className="heroTitle text-center">
              Transformamos Ideias em Imagens Realistas em 3D
            </h1>
            <h4 className="heroSubtitle text-center">
              Modelagem 3D e Renderizações de alta qualidade para destacar o seu
              projeto arquitetônico.
            </h4>
            <a
              target="blank"
              href="https://api.whatsapp.com/send/?phone=5516991975673&text=Ol%C3%A1%2C+Gostaria+de+receber+um+or%C3%A7amento.&type=phone_number&app_absent=0"
            >
              <button id="heroButton">Quero um orçamento</button>
            </a>
          </div>
          <div
            className="d-flex flex-lg-row col-12 flex-column align-items-sm-center"
            id="aboutUs-container"
          >
            <div className="justify-content-center col-lg-5 col-sm-10 mb-sm-5">
              <img
                src={logoGrande}
                alt="logo-solutions-render-3d"
                className="p-5"
                id="logoGrande"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center ms-lg-5 gap-5">
              <h2 id="aboutUs-title" className="text-center">Sobre a Solutions Render3D</h2>
              <p className="m-4" id="aboutUs-text">
                Na Solutions Render3D, o foco é dar vida às suas ideias.
                Especializados em modelagem 3D e renderizações arquitetônicas,
                entregamos imagens com realismo e impacto visual para apresentar
                seu projeto de forma clara, profissional e impressionante. Seja
                para um projeto residencial, comercial ou urbanístico, nossa
                missão é ajudar você a encantar clientes, investidores e
                parceiros.
              </p>
            </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-center mt-5 mb-5">
            <h2 id="ourServices-title">Nossos Serviços</h2>
          </div>
          <div className="d-flex flex-lg-row flex-column gap-5 me-lg-4">
            <div className="d-flex flex-column align-items-center gap-5">
              <img id="ruler-icon" src={regua} alt="" />
              <h4>Modelagem 3D</h4>
              <p className="text-center mt-2">
                Criação de modelos detalhados de ambientes, fachadas e
                interiores.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center gap-5">
              <img id="paintBrush-icon" src={pincel} alt="" />
              <h4>Renderizações Realistas</h4>
              <p className="text-center mt-2">
                Imagens finais com iluminação, texturas e materiais para
                apresentar seu projeto com impacto visual.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center gap-5">
              <img id="urban-icon" src={urban} alt="" />
              <h4 className="text-center">Estudos de Volume e Urbanismo</h4>
              <p id="urbanServiceText" className="text-center">
                Visualizações para projetos urbanísticos e estudos de
                viabilidade.
              </p>
            </div>
          </div>
          <div className="m-5">
            <h1 className="m-5 d-flex justify-content-center text-center">
              Projetos Recentes
            </h1>
            <CarouselSection />
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2 className="m-5 text-center" id="contactTitle">
                Solicite seu Orçamento
              </h2>
              <p id="contactText" className="text-center">
                Quer dar vida ao seu projeto? Entre em contato e peça um
                orçamento personalizado.
              </p>
              <a
                target="blank"
                href="https://api.whatsapp.com/send/?phone=5516991975673&text=Ol%C3%A1%2C+Gostaria+de+receber+um+or%C3%A7amento.&type=phone_number&app_absent=0"
              >
                <button className="mb-5" id="heroButton">Quero um orçamento</button>
              </a>
            </div>
          </div>
          <footer id="footerPage" className="d-flex justify-content-center p-2">
            <span>
              Desenvolvido por <a id="devLink" target="blank" href="https://www.linkedin.com/in/raul-rodrigues-b57402250">
                Raul Rodrigues de Oliveira
              </a>
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
