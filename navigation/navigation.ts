import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
import {useRoute} from '@react-navigation/native';

export const useAppStackNavRoute = <T extends keyof RootStackParamList>() =>
  useRoute<NativeStackScreenProps<RootStackParamList, T>['route']>();
