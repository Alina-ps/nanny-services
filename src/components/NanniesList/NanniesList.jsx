import { useDispatch, useSelector } from 'react-redux';
import {
  selectLimit,
  selectNannies,
  selectPage,
  selectTotal,
} from '../../redux/nannies/selectors.js';
import s from './NanniesList.module.css';
import NannyCard from '../NannyCard/NannyCard.jsx';
import { setPage } from '../../redux/nannies/slice.js';

const NanniesList = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  const totalPages = Math.ceil(total / limit);
  const nanniesToShow = page * limit;
  const currentNannies = nannies.slice(0, nanniesToShow);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div className={s.contactListWrapper}>
      <ul className={s.list}>
        {currentNannies.map((nanny) => {
          return (
            <li className={s.item} key={nanny.id}>
              <NannyCard nanny={nanny} />
            </li>
          );
        })}
      </ul>
      {page < totalPages && (
        <button className={s.btn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default NanniesList;
