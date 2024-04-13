import { View, ScrollView } from 'react-native';
import NavButton from '../nav-button';
import UserHeader from '../user-header';
import BackButton from '../back-button';
import { usePermissions } from '../../context';

export default function NavBar({ backActivated }: { backActivated: boolean }) {
  if (backActivated)
    return (
      <View style={{ padding: 10 }}>
        <BackButton />
      </View>
    );
  const permissions = usePermissions((state:any) => state);
  const isStudent = Object.values(permissions)
    .filter((e) => typeof e === 'number')
    .every((e) => e === 0);

  return (
    <>
      <UserHeader />
      <ScrollView
        style={{ flexGrow: 0 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 10, gap: 10, flexDirection: 'row' }} key={'nav_header_container'+0}>
          <NavButton
            goTo="/home/fragments/news/"
            iconName={'newspaper-outline'}
            focused={usePathname().includes('/news')}
            key={'nav_header'+1}
          />
          {!isStudent && (
            <NavButton
              goTo="/home/fragments/files/"
              iconName={'folder-open-outline'}
              focused={usePathname().includes('/files')}
              key={'nav_files'+2}
            />
          )}
          <NavButton
            goTo="/home/fragments/school-report/"
            iconName={'stats-chart-outline'}
            focused={usePathname().includes('/school-report')}
            key={'nav_school-report'+3}
          />
          {(!!permissions.respFinanceiro || !isStudent) && (
            <NavButton
              goTo="/home/fragments/finance/"
              iconName={'wallet-outline'}
              focused={usePathname().includes('/finance')}
              key={'nav_finance'+4}
            />
          )}
          {!isStudent && (
            <NavButton
              goTo="/home/fragments/request"
              iconName={'call-outline'}
              focused={usePathname().includes('/request')}
              key={'nav_request'+5}
            />
          )}
          <NavButton
            goTo="/home/fragments/schedule/"
            iconName={'calendar-outline'}
            focused={usePathname().includes('/schedule')}
            key={'nav_schedule'+6}
          />
          {!isStudent && (
            <NavButton
              goTo="/home/fragments/chat"
              iconName={'chatbox-ellipses-outline'}
              focused={usePathname().includes('/chat')}
              key={'nav_chat'+7}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}
