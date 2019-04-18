import { TextInputProps } from 'react-native';
export interface ISearch {
    placeholderTextColor: string;
    onClose: () => void;
    onBackRequest?: () => void;
    forceSelect: boolean;
    setText: (text: string) => void;
    searchText: string;
    autoCorrect: boolean;
    SearchInputProps?: TextInputProps;
}
