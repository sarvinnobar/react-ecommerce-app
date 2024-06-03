import "./Card.scss";

export default function Card({ icon, title }) {
  return (
    <div className="card__div">
      <div className="bg-circle__div"></div>
      <div className="blur-box__div ">{icon}</div>
      <div className="blur-title">{title}</div>
    </div>
  );
}
