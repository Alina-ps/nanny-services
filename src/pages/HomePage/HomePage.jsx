import s from './HomePage.module.css';
import sprite from '../../assets/icons.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice.js';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    dispatch(openModal());
  };
  return (
    <div className={s.hero}>
      <div className={s.textSection}>
        <h1 className={s.heading}>Make Life Easier for the Family:</h1>
        <p className={s.subheading}>
          Find Babysitters Online for All Occasions
        </p>
        <button
          type="button"
          className={s.button}
          onClick={handleRegisterClick}
        >
          Get started
          <svg className={s.iconArrow} width={20} height={20}>
            <use href={`${sprite}#icon-arrow-right-up`}></use>
          </svg>
        </button>
      </div>

      <div className={s.imageSection}>
        <div className={s.experience}>
          <div className={s.iconCheck}>
            <svg width={20} height={15}>
              <use href={`${sprite}#icon-check`}></use>
            </svg>
          </div>
          <p className={s.experienceText}>Experienced nannies</p>
          <p className={s.count}>15,000</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
