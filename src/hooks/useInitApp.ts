import { useEffect } from 'react';
import uoslifeBridge from '../bridge';
import useUserStore from '../store/user';
// import APIService from '../api/service';
// import useRecapInfoStore from '../store/recapInfo';

const useInitApp = () => {
  const { setUser, setDefaultUser } = useUserStore();
  // const { setRecapInfo } = useRecapInfoStore();

  const handleUserInfo = async () => {
    try {
      const user = await uoslifeBridge.getUserInfo();
      setUser(user);
    } catch (e) {
      setDefaultUser();
    }
  };
  // const handleRecapInfo = async () => {
  //   try {
  //     const recapInfo = await APIService.getLibraryHistories();
  //     setRecapInfo(recapInfo);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    (async () => {
      handleUserInfo();
      // handleRecapInfo();
    })();
  }, []);
};

export default useInitApp;
