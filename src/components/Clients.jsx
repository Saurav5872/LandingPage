import React from "react";
import "./Clients.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

const clients = [
  { id: 1, logo: client1, alt: "Client 1" },
  { id: 2, logo: client2, alt: "Client 2" },
  { id: 3, logo: client3, alt: "Client 3" },
  { id: 4, logo: client4, alt: "Client 4" },
  { id: 5, logo: client5, alt: "Client 5" },
  { id: 6, logo: client6, alt: "Client 6" },
];

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container text-center">
        <h2 className="clients-title">Our <span className="text-orange">Client’s</span></h2>
        <p className="clients-subtitle">
          We are proud to partner with a diverse range of clients who trust us
          to deliver exceptional digital experiences.
        </p>

        <div className="clients-slider">
          <div className="slider-track">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo">
                <img src={client.logo} alt={client.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
