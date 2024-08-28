import { Dimensions, Platform, StatusBar } from 'react-native';

/**
 * Retonar se o dispositivo é um iphone X ou não
 */
export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

/**
 * Determina qual estilo utilizar para os dispositivos
 * @param {any} iphoneXStyle Estilo para determinar se for iPhone X
 * @param {any} regularStyle Estilo para os demais dispositivos
 */
export function ifIphoneX(iphoneXStyle: number, regularStyle: number) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

/**
 * Retorna o tamanho do status bar
 * @param {boolean} safe Determina se a precisa de uma margem de segurança
 */
export function getStatusBarHeight(safe: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

/**
 * Retorna 34px se for iPhone X, caso contrario, retorna 0
 */
export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}
