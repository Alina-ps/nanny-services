import s from './NannyCard.module.css';
import sprite from '../../assets/icons.svg';

const NannyCard = ({ nanny }) => {
  return (
    <div>
      <img className={s.img} src={nanny.avatar_url} alt={nanny.name}></img>
      <h3>Nanny</h3>
      <p className={s.location}>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-map-pin`}></use>
        </svg>
        {nanny.location}
      </p>
      <p className={s.rating}>Rating: {nanny.rating}</p>
      <p className={s.price}>Price / 1 hour: {nanny.price_per_hour}$</p>
      <p className={s.name}>{nanny.name}</p>
      <p className={s.description}>{nanny.about}</p>
      <p>Age: {nanny.birthday}</p>
      <p>Experience:{nanny.experience}</p>
      <p>Kids Age:{nanny.kids_age}</p>
      <p>Characters:{nanny.characters}</p>
      <p>Education:{nanny.education}</p>
    </div>
  );
};

export default NannyCard;
