import { useEffect } from 'react';
import uoslifeBridge from '../bridge';
import useUserStore from '../store/user';
import APIService from '../api/service';
import useRecapInfoStore from '../store/recapInfo';

const useInitApp = () => {
  const { setUser, setDefaultUser } = useUserStore();
  const { setRecapInfo } = useRecapInfoStore();

  const handleUserInfo = async () => {
    try {
      const user = await uoslifeBridge.getUserInfo();
      setUser(user);
    } catch (e) {
      setDefaultUser();
    }
  };
  const handleRecapInfo = async () => {
    const recapInfo = await APIService.getLibraryHistories();
    if (recapInfo.status === 400) {
      await APIService.saveLibraryHistories();
      const retryRecapInfo = await APIService.getLibraryHistories();
      if (retryRecapInfo.status === 400) {
        alert('2023년 도서관 이용 기록이 없어요.');
        await uoslifeBridge.goBack();
        return;
      }
      setRecapInfo(retryRecapInfo);
    }
    if (recapInfo.status === 401) {
      alert('서비스를 이용하기 위해 앱 재접속이 필요합니다.');
      await uoslifeBridge.goBack();
      return;
    }
    setRecapInfo(recapInfo);
    console.log(recapInfo);
  };

  useEffect(() => {
    (async () => {
      handleUserInfo();
      handleRecapInfo();
    })();
  }, []);
};

export default useInitApp;
