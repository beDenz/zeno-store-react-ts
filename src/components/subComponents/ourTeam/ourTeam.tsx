import React, { ReactElement } from "react";
import "./ourTeam.scss";

const OurTeam: React.FC = (): ReactElement => {
  return (
    <section className="ourDesignTeam container-small margin-center display-flex flex-collum align-center">
      <h3 className="ourDesignTeam__title">Our Design Team</h3>
      <p className="ourDesignTeam__description">
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized
      </p>
      <div className="ourDesignTeam__items display-flex flex-space-between">
        <div className="ourDesignTeam__item">
          <div className="ourDesignTeam__item-description">
            <span className="ourDesignTeam__name">Diane Thompson</span> /{" "}
            <span className="ourDesignTeam__skill">Leader Design</span>
          </div>
        </div>
        <div className="ourDesignTeam__item">
          <div className="ourDesignTeam__item-description">
            <span className="ourDesignTeam__name">Diane Thompson</span> /{" "}
            <span className="ourDesignTeam__skill">Leader Design</span>
          </div>
        </div>
        <div className="ourDesignTeam__item">
          <div className="ourDesignTeam__item-description">
            <span className="ourDesignTeam__name">Diane Thompson</span> /{" "}
            <span className="ourDesignTeam__skill">Leader Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
