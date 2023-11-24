import React from 'react';
import './Home.scss';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import img1 from '../../img/img22.jpg';
import cel from '../../img/cel.png';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="main-content">

        <div className='frst-section'>

          <div className='frst-div'>

            <div className="img-frst">
              <img src={img1} alt="cel1" />
            </div>

            <div className='mid-div'>
              <div className='mid-box1'>
                <h2>EMERGI NET</h2>
              </div>

              <div className='mid-box2'>
                <h2>O EmergiNet é um produto inovador projetado para melhorar significativamente o tempo de resposta a emergências médicas em áreas remotas. Ele utiliza tecnologia avançada de localização, como GPS de alta precisão, para identificar rapidamente a posição exata dos pacientes. </h2>
              </div>

            </div>

            <div className='last-div'> <button className='btn1'><p>Saiba mais...</p></button></div>

          </div>

          <div className='sec-div'>
           
              <div className='box-sec'>

                <h2>Problema</h2>
                <p>Em áreas remotas, o tempo de resposta a emergências médicas é frequentemente prolongado devido a desafios como localização imprecisa do paciente e falta de acesso imediato a serviços de emergência. Isso pode levar a resultados de saúde negativos e, em alguns casos, fatais.</p>

              </div>

              <div className='box-sec'>

                <h2>Solução</h2>
                <p>A solução EmergiNet visa reduzir significativamente o tempo de resposta a emergências médicas em áreas remotas. A ideia central é um aplicativo móvel que permite aos usuários enviarem rapidamente um alerta de SOS, que inclui sua localização exata, para os serviços de emergência adequados.</p>

              </div>

              <div className='box-sec'>

                <h2>Objetivos</h2>
                <p>O objetivo do produto EmergiNet é reduzir o tempo de resposta a emergências médicas em áreas remotas, facilitando a localização rápida e precisa de pacientes e garantindo acesso rápido a serviços de emergência.</p>

              </div>

            
          </div>

        </div>

        <div className="advantages-section">
          <h1 className="advantages-title">Vantagens</h1>

          <div className='advant-div'>
            <div className='box-vant'>
              <div className="img-vant"><img src={cel} alt="cel1" /></div>
              <div className='text-box-vant'>
                <h1>01</h1>
                <h3>Localização Precisa</h3>
                <p>Utilização de GPS para garantir que a localização do usuário seja transmitida com precisão aos serviços de emergência.
                </p>
              </div>
            </div>

            <div className='box-vant'>
              <div className="img-vant"><img src={cel} alt="cel1" /></div>
              <div className='text-box-vant'>
                <h1>02</h1>
                <h3>Interface Intuitiva</h3>
                <p>O aplicativo é projetado para ser fácil de usar, mesmo para pessoas com habilidades tecnológicas limitadas.
                </p>
              </div>
            </div>

            <div className='box-vant'>
              <div className="img-vant"><img src={cel} alt="cel1" /></div>
              <div className='text-box-vant'>
                <h1>03</h1>
                <h3>Integração com Serviços de Emergência</h3>
                <p>Colaboração direta com serviços locais de emergência para garantir uma resposta rápida.</p>
              </div>
            </div>


          </div>

        </div>


      </div>

      <Footer />
    </div>
  );
};

export default Home;
