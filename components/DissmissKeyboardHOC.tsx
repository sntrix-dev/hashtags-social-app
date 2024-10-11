import React, { ComponentType, ReactNode } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ViewProps,
} from "react-native";

interface DismissKeyboardHOCProps extends ViewProps {
  children: ReactNode;
}

const DismissKeyboardHOC = <P extends object>(Comp: ComponentType<P>) => {
  return ({ children, ...props }: DismissKeyboardHOCProps & P) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props} children={children} />
    </TouchableWithoutFeedback>
  );
};

const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
