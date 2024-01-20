import { useCallback, useState } from 'react';
import MainPage from '../../pages/MainPage';
import TimelineView from '../../templates/TimelineView';

const MainContainer = () => {
  const [isMain, setIsMain] = useState(true);

  const setTimelineView = useCallback(() => {
    setIsMain(false);
  }, [isMain]);

  return isMain ? (
    <MainPage setTimelineView={setTimelineView} />
  ) : (
    <TimelineView />
  );
};

export default MainContainer;
