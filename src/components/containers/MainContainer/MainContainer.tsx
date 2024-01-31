import { useCallback } from 'react';
import MainPage from '../../pages/MainPage';
import TimelineView from '../../templates/TimelineView';
import useIsMainStore from '../../../store/isMain';

const MainContainer = () => {
  const { isMain, setTimelinePage } = useIsMainStore();

  const setTimelineView = useCallback(() => {
    setTimelinePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMain ? (
    <MainPage setTimelineView={setTimelineView} />
  ) : (
    <TimelineView />
  );
};

export default MainContainer;
