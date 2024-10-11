import DismissKeyboardView from "@/components/DissmissKeyboardHOC";
import Button from "@/design/components/Button";
import Divider from "@/design/components/Divider";
import TextField from "@/design/components/TextField";
import { register } from "@/services/apis/auth";
import { setToken } from "@/services/storage";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onRegister = async () => {
    await register(username, email, password)
      .then((res) => {
        console.log(res);
        setToken(res.token);
      })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        Alert.alert("Error", err.response.data.error);
      })
      .finally(() => {
        console.log("done");
      });
  };

  return (
    <DismissKeyboardView>
      <SafeAreaView className="bg-dark-black h-full gap-y-4">
        <View className="flex-1 items-center justify-center p-4 gap-y-8">
          <Text className="text-white text-4xl font-pbold text-center">
            Register
          </Text>
          <View className="gap-y-4">
            <TextField
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
            />
            <TextField
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email address"
            />
            <TextField
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureText
            />
            <TextField
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Confirm Password"
              secureText
            />
            <Text className="text-social-blue font-psemibold text-base text-right">
              Forgotten password?
            </Text>
          </View>
          <Button fullWidth onPress={onRegister}>
            Register
          </Button>
          <View className="flex-row w-full items-center gap-x-4">
            <View className="border-b border-white flex-1" />
            <Text className="text-light-white text-base font-pregular text-center">
              Or
            </Text>
            <View className="border-b border-white flex-1" />
          </View>
          <Button theme="secondary" fullWidth>
            Continue with Google
          </Button>
        </View>
        <Divider />
        <View className="">
          <Text className="text-light-white text-base font-pregular text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-social-pink font-psemibold">
              Log in
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default Register;
