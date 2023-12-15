import { NavLink } from 'react-router-dom';
import './deskList.css';
import compDesk1 from "../../pages/catalog/desksImages/compDesk1.jpg";
import kitDesk1 from "../../pages/catalog/desksImages/kitDesk1.jpg";
import cofDesk1 from "../../pages/catalog/desksImages/cofDesk1.jpg";
import compDesk2 from "../../pages/catalog/desksImages/compDesk2.jpg";
import kitDesk2 from "../../pages/catalog/desksImages/kitDesk2.jpg";
import cofDesk2 from "../../pages/catalog/desksImages/cofDesk2.jpg";
import compDesk3 from "../../pages/catalog/desksImages/compDesk3.jpg";
import kitDesk3 from "../../pages/catalog/desksImages/kitDesk3.jpg";
import cofDesk3 from "../../pages/catalog/desksImages/cofDesk3.jpg";

const DeskList = ({
  id,
  type = 'No type',
  description = 'No description',
  material = 'No material',
  price = 0,
}) => {
  let imageSrc;
  switch (id) {
    case 1:
      imageSrc = compDesk1;
      break;
    case 2:
      imageSrc = kitDesk1;
      break;
    case 3:
      imageSrc = cofDesk1;
      break;
    case 4:
      imageSrc = compDesk2;
      break;
    case 5:
      imageSrc = kitDesk2;
      break;
    case 6:
      imageSrc = cofDesk2;
      break;
    case 7:
      imageSrc = compDesk3;
      break;
    case 8:
      imageSrc = kitDesk3;
      break;
    case 9:
      imageSrc =cofDesk3;
      break;


    default:
      imageSrc = "";
      break;
  }
  // console.log("Image source:", compDesk1);


  return (
    <section className="list">
      <div className="list__items">
        <img src={imageSrc} className="list__image" alt="desk" width={230} height={230} />
        <h2 className="list__type">{type}</h2>
        <p className="list__description">
          <text>{description}</text>
        </p>
        <p className="list__material">
          Material: <text>{material}</text>
        </p>
        <p className="list__price">
          Price: <span className="list__price-color">{price} $ </span>{' '}
        </p>
        <NavLink className="list__button" exact to={`/Catalog/${id}`}>
          View more
        </NavLink>
      </div>
    </section>
  );
};

export default DeskList;
