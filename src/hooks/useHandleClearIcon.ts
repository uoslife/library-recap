import uoslifeBridge from '../bridge';
import useIsMainStore from '../store/isMain';

const useHandleClearIcon = () => {
  const { setMainPage } = useIsMainStore();

  const handleClickClearIcon = async () => {
    await uoslifeBridge.goBack();
    setMainPage();
  };

  return handleClickClearIcon;
};

export default useHandleClearIcon;
