import React, { useState } from "react";
import classnames from "classnames";
import "./faqs.scss";
import { createBreadcrumb, createTitle } from "../../utilities/utilities";
import Breadcrumb from "../UI/breadcrumb/breadcrumb";
import Pagetitle from "../UI/pageTitle/pagetitle";

declare module "react" {
  interface HTMLAttributes<T> {
    myid?: string;
  }
}

interface FaqsConfig {
  match: any;
}

const Faqs: React.FC<FaqsConfig> = ({ match }): JSX.Element => {
  const [openQ, setOpenQ] = useState<string | null>(``);

  const openQFunction = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    target.getAttribute(`myid`) === openQ
      ? setOpenQ(``)
      : setOpenQ(target.getAttribute(`myid`));
  };

  return (
    <div className="faqs-list container-small margin-center">
      <div className="text-align-center">
        <Pagetitle title={createTitle(match.url)} />
        <Breadcrumb title={createBreadcrumb(match.url)} />
      </div>
      <ul>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="1" onClick={openQFunction}>
              Where is my order?
            </h3>
            <span
              className="faqs-list__button"
              myid="1"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              { close: openQ !== "1" },
              { open: openQ === "1" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="2" onClick={openQFunction}>
              What is a pre-order?
            </h3>
            <span
              className="faqs-list__button"
              myid="2"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              {
                close: openQ !== "2"
              },
              { open: openQ === "2" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="3" onClick={openQFunction}>
              When will my pre-order ship?
            </h3>
            <span
              className="faqs-list__button"
              myid="3"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              {
                close: openQ !== "3"
              },
              { open: openQ === "3" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="4" onClick={openQFunction}>
              My order hasn’t shipped yet; can I add another item to it?
            </h3>
            <span
              className="faqs-list__button"
              myid="4"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              {
                close: openQ !== "4"
              },
              { open: openQ === "4" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="5" onClick={openQFunction}>
              What is your Returns and Exchanges policy?
            </h3>
            <span
              className="faqs-list__button"
              myid="5"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              {
                close: openQ !== "5"
              },
              { open: openQ === "5" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
        <li className="faqs-list__item">
          <div className="display-flex flex-space-between">
            <h3 className="faqs-list__title" myid="6" onClick={openQFunction}>
              Canceling or changing an order
            </h3>
            <span
              className="faqs-list__button"
              myid="6"
              onClick={openQFunction}
            >
              &#x50;
            </span>
          </div>
          <div
            className={classnames(
              "faqs-list__description",
              {
                close: openQ !== "6"
              },
              { open: openQ === "6" }
            )}
          >
            <p>
              All in-stock, non-preorders will be filled within 7-10 business
              days of being placed (not including weekends or holidays).
            </p>
            <p>
              Orders are packed and shipped in Conyers, GA. Shipments are made
              via trackable service. You will receive an email with tracking
              information as soon as your order is headed your way.{" "}
            </p>
            <p>
              Please allow 1 day for tracking information to update on your
              order. If you are unable to track your order, please let us know
              and we'll be happy to assist.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Faqs;
