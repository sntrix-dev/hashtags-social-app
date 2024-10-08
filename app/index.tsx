import { Link, router } from "expo-router";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { users } from "../data/users";
import { FC } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";

interface LoginCardProps {
  name: string;
  profileImage: string;
  onProfileClick?: () => void;
}

const LoginCard: FC<LoginCardProps> = ({
  name,
  profileImage,
  onProfileClick,
}) => {
  return (
    <TouchableOpacity
      onPress={onProfileClick}
      activeOpacity={1}
      className="flex-row gap-4 items-center w-full px-4 py-2 bg-slate-800 rounded-3xl mt-4 overflow-hidden"
    >
      <Image
        source={{ uri: profileImage }}
        className="w-20 h-20 rounded-full"
        resizeMode="contain"
      />
      <Text className="text-white text-xl font-pbold">{name}</Text>
    </TouchableOpacity>
  );
};

const Login = () => {
  const { user, setUser } = useGlobalContext();

  return (
    <SafeAreaView className="bg-dark-black w-full h-full">
      <View className="w-full h-full px-4">
        <FlatList
          data={users}
          keyExtractor={(item: any) => item?.id?.toString()}
          renderItem={({ item }) => (
            <LoginCard
              {...item}
              onProfileClick={() => {
                setUser?.(item.id);
                router.push("/home");
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
