import DismissKeyboardView from "@/components/DissmissKeyboardHOC";
import Button from "@/design/components/Button";
import Divider from "@/design/components/Divider";
import TextField from "@/design/components/TextField";
import { login } from "@/services/apis/auth";
import { setToken } from "@/services/storage";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = async () => {
    await login(username, password)
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
            Login
          </Text>
          <View className="gap-y-4">
            <TextField
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username or email address"
            />
            <TextField
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureText
            />
            <Text className="text-social-blue font-psemibold text-base text-right">
              Forgotten password?
            </Text>
          </View>
          <Button fullWidth onPress={onLogin}>
            Log In
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
            Don't have an account?{" "}
            <Link href="/register" className="text-social-pink font-psemibold">
              Register
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default Login;
