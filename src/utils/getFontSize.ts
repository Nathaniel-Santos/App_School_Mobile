import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
export default function (size: number): number {
  return size / fontScale;
}
