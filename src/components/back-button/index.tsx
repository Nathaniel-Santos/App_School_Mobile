import { TouchableOpacity } from 'react-native';
// import { usePathname, useRouter } from 'expo-router';
// import Ionicons from '@expo/vector-icons/Ionicons';
import backButtonNavHandle from '../../utils/backButtonNavHandle';
// import { useAccountMode } from '../../context';

export default function BackButton() {
  // const router = useRouter();
  // const current = usePathname();
  // const selectedStudent = useAccountMode((state) => state.selectedStudent);
  // const student = useAccountMode((state) => state.student);
  return (
    <TouchableOpacity
      // onPress={() =>
      //   router.replace(
      //     selectedStudent || student
      //       ? '/home/fragments/news'
      //       : backButtonNavHandle(current)
      //   )
      // }
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      {/* <Ionicons name={'chevron-back-outline'} size={30} color="#727A8F" /> */}
    </TouchableOpacity>
  );
}
