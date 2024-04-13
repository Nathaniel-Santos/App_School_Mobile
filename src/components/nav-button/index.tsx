import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCustomization } from '../../context';

export default function NavButton({
  focused,
  goTo,
  iconName,
}: {
  focused: boolean;
  goTo: string;
  iconName: string | any;
}) {
  const menuButtonColor = useCustomization(state => state.menuButtonColor);
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace(goTo || '/home/')}
      style={{
        backgroundColor: menuButtonColor || 'white',
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: focused ? 1 : 0.5,
      }}
    >
      <Ionicons name={iconName || 'beer-outline'} size={25} color="white" />
    </TouchableOpacity>
  );
}
