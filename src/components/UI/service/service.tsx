import React, { ReactElement } from "react";
import "./service.scss";

const Service: React.FC = (): ReactElement => {
  interface serviceConfig {
    id: string;
    title: string;
    description: string;
  }
  const service: serviceConfig[] = [
    {
      id: "sevice__track",
      title: "Free Shipping",
      description: "Plus, enjoy speedy 2-day delivery on thousands of items"
    },
    {
      id: "service__deals",
      title: "Amazing Deals",
      description: "Daily sales mean you always save (even when you splurge)"
    },
    {
      id: "service__customer",
      title: "Expert Customer",
      description: "No robots here! Our friendly team is on hand 7 days a week"
    }
  ];

  return (
    <section className="service display-flex flex-justify-content-center margin-top-30 margin-center">
      {service.map((item: serviceConfig) => (
        <div className="service__item display-flex flex-collum flex-justify-content-center align-center">
          <div>
            <img src={`image/${item.id}.png`} alt="" />
          </div>
          <h4 className="service__title">{item.title}</h4>
          <p className="service__description">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Service;
