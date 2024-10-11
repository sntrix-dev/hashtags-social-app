import { FC } from "react";
import { TextInput, View } from "react-native";

interface TextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureText?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  secureText = false,
}) => {
  return (
    <View className="flex-row w-full relative mt-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className="bg-gray text-white px-4 pt-2 pb-3 font-pregular placeholder:font-pregular rounded-lg flex-1 text-base "
        placeholder={placeholder}
        secureTextEntry={secureText}
      />
    </View>
  );
};

export default TextField;
