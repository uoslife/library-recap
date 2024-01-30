import { useCallback } from 'react';
import MainPage from '../../pages/MainPage';
import TimelineView from '../../templates/TimelineView';
import useIsMainStore from '../../../store/isMain';
import APIService from '../../../api';

const MainContainer = () => {
  const { isMain, setTimelinePage } = useIsMainStore();

  const setTimelineView = useCallback(async () => {
    setTimelinePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const recapInfo = await APIService.getLibraryHistories();
    console.log(recapInfo);
  }, []);

  return isMain ? (
    <MainPage setTimelineView={setTimelineView} />
  ) : (
    <TimelineView />
  );
};

export default MainContainer;
