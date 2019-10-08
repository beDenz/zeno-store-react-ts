import React, { ReactElement } from "react";
import "./faqs.scss";

const Faqs: React.FC = (): ReactElement => {
  return (
    <ul className="faqs-list container-small margin-center">
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">Where is my order?</h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>

        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.{" "}
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">What is a pre-order?</h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>
        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">When will my pre-order ship? </h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>
        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">
            My order hasn’t shipped yet; can I add another item to it?
          </h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>
        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">
            What is your Returns and Exchanges policy?
          </h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>
        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
      <li className="faqs-list__item">
        <div className="display-flex flex-space-between">
          <h3 className="faqs-list__title">Canceling or changing an order</h3>
          <span className="faqs-list__button">&#x50;</span>
        </div>
        <p className="faqs-list__description">
          All in-stock, non-preorders will be filled within 7-10 business days
          of being placed (not including weekends or holidays).
        </p>
        <p>
          Orders are packed and shipped in Conyers, GA. Shipments are made via
          trackable service. You will receive an email with tracking information
          as soon as your order is headed your way.{" "}
        </p>
        <p>
          Please allow 1 day for tracking information to update on your order.
          If you are unable to track your order, please let us know and we'll be
          happy to assist.
        </p>
      </li>
    </ul>
  );
};

export default Faqs;
