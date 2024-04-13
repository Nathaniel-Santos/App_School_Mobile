import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';
import { Dimensions } from 'react-native';
import { usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar';
import ChangeStudentModal from '../../components/change-student-modal';
import { useShowNavBar } from '../../context';

export default function HomeLayout() {
  const pathName = usePathname();
  const [shownBackButton, setShownBackButton] = useState<boolean>(false);
  const { width, height } = Dimensions.get('window');
  const navbarVisibility = useShowNavBar((state) => state.isShown);

  useEffect(() => {
    if (pathName.includes('-per-') || pathName.includes('-form')) {
      return setShownBackButton(true);
    }
    return setShownBackButton(false);
  }, [pathName]);

  return (
    <SafeAreaView style={{ backgroundColor: '#F5F7F9', height, width }}>
      <ChangeStudentModal />
      {navbarVisibility && <NavBar backActivated={shownBackButton} />}
      <Slot />
    </SafeAreaView>
  );
}
