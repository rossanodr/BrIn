import { useRootStackParamList } from "./useRootStackParamList";

export function useHandleNavigation() {
  const navigation = useRootStackParamList();
  function handleGoBack() {
    navigation.goBack();
  }
  function handleNavigation(screen: string) {
    navigation.navigate(screen);
  }
  return { handleNavigation, handleGoBack };
}
