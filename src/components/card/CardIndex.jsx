import React from "react";
import "./CardIndex.scss";
import Card from "./Card";
import Shipping from "../../assets/icons/card/Shipping";
import Gift from "../../assets/icons/card/Gift";
import Award from "../../assets/icons/card/Award";
import Guarantee from "../../assets/icons/card/Guarantee";

export default function CardIndex() {
  return (
    <div className="cards-row">
      <Card icon={<Award />} title="Best Tech Shop" />
      <Card icon={<Gift />} title="Awesome Gifts" />
      <Card icon={<Guarantee />} title="Quality Guarantee" />
      <Card icon={<Shipping />} title="Fast Shipping" />
    </div>
  );
}
