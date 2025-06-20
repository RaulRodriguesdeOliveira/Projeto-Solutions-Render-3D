import foto1 from "/SOCIALScene 21.jpg";
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
            <h1 data-aos='fade-up' data-aos-delay="500" className="heroTitle text-center">
              Transformando Ideias em Imagens Realistas 3D
            </h1>
            <h4 data-aos='fade-up' data-aos-delay="500" className="heroSubtitle text-center">
              Modelagem 3D e Renderizações de alta qualidade para destacar o seu
              projeto arquitetônico.
            </h4>
            <a data-aos='fade-up' data-aos-delay="500" 
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
                data-aos='fade-right' data-aos-delay="600" 
                src={logoGrande}
                alt="logo-solutions-render-3d"
                className="p-5"
                id="logoGrande"
              />
            </div>
            <div data-aos='fade-left' data-aos-delay="600" className="d-flex flex-column align-items-center justify-content-center ms-lg-5 gap-5">
              <h2 id="aboutUs-title" className="text-center">
                Sobre a Solutions Render3D
              </h2>
              <p className="m-4" id="aboutUs-text">
                Na Solutions Render3D, o foco é transformar ideias em imagens
                realistas e impactantes. Somos especializados em modelagem 3D e
                renderizações arquitetônicas, criando representações visuais que
                ajudam a apresentar e visualizar projetos de forma clara e
                profissional. Atendemos arquitetos, engenheiros, investidores e
                também pessoas que desejam ver o próprio projeto ganhar vida,
                seja para construir, reformar ou simplesmente visualizar como
                ficará antes de executar. Seja um projeto residencial, comercial
                ou urbanístico, nossa missão é ajudar você a encantar clientes,
                parceiros ou até mesmo realizar o sonho de ver o seu futuro
                espaço pronto em 3D.
              </p>
            </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-center mt-5 mb-5">
            <h2 id="ourServices-title">Nossos Serviços</h2>
          </div>
          <div className="d-flex flex-lg-row flex-column gap-5 me-lg-4">
            <div data-aos='fade-up' data-aos-delay="400" id="modelagem-container" className="d-flex flex-column align-items-center gap-5">
              <img id="ruler-icon" src={regua} alt="" />
              <h4>Modelagem 3D</h4>
              <p className="text-center mt-2 ms-lg-4">
                Criação de modelos detalhados de ambientes, fachadas e
                interiores.
              </p>
            </div>
            <div data-aos='fade-up' data-aos-delay="400" id="render-container" className="d-flex flex-column align-items-center gap-5">
              <img id="paintBrush-icon" src={pincel} alt="" />
              <h4>Renderizações Realistas</h4>
              <p className="text-center mt-2 ps-3 pe-3 ps-lg-5 pe-lg-5">
                Imagens realistas com iluminação, texturas e materiais que
                destacam cada detalhe e transmitem o verdadeiro impacto do seu
                projeto.
              </p>
            </div>
            <div data-aos='fade-up' data-aos-delay="400" id="urbanismo-container" className="d-flex flex-column align-items-center gap-5">
              <img id="urban-icon" src={urban} alt="" />
              <h4 className="text-center">Estudos de Volume e Urbanismo</h4>
              <p id="urbanServiceText" className="text-center">
                Visualizações para projetos urbanísticos e estudos de
                viabilidade.
              </p>
            </div>
          </div>
          <div className="m-5">
            <h1
              id="project-title"
              className="m-5 d-flex justify-content-center text-center"
            >
              Projetos
            </h1>
            <CarouselSection />
            <div data-aos='fade-up' data-aos-delay="400" className="d-flex flex-column justify-content-center align-items-center mt-5">
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
                <button className="mb-5" id="heroButton">
                  Quero um orçamento
                </button>
              </a>
            </div>
          </div>
          <footer id="footerPage" className="d-flex justify-content-center p-2">
            <span>
              Desenvolvido por{" "}
              <a
                id="devLink"
                target="blank"
                href="https://www.linkedin.com/in/raul-rodrigues-b57402250"
              >
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
