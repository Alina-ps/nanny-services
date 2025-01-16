import { useSelector } from 'react-redux';
import { selectNannies } from '../../redux/nannies/selectors.js';
import s from './NanniesList.module.css';
import NannyCard from '../NannyCard/NannyCard';

const NanniesList = () => {
  const nannies = useSelector(selectNannies);

  return (
    <div className={s.contactListWrapper}>
      <ul className={s.list}>
        {nannies.map((nanny) => {
          return (
            <li className={s.item} key={nanny.id}>
              <NannyCard nanny={nanny} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NanniesList;
