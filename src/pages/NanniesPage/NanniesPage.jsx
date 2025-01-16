import { useDispatch } from 'react-redux';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import { fetchAllNannies } from '../../redux/nannies/operations.js';
import { useEffect } from 'react';

const NanniesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNannies());
  }, [dispatch]);

  return (
    <div>
      <NanniesList />
    </div>
  );
};

export default NanniesPage;
