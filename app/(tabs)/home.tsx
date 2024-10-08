import { useGlobalContext } from "@/context/GlobalProvider";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { users } from "../../data/users";
import { posts } from "../../data/posts";
import PostCard from "@/components/Post";

const Home = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-dark-black h-full">
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item?.id?.toString()}
        renderItem={({ item }) => <PostCard {...item} />}
        ItemSeparatorComponent={() => (
          <View className="border-b border-gray " />
        )}
        ListHeaderComponent={() => (
          <View className="p-4 my-2 border-b border-gray">
            <Text className="text-white text-xl font-pbold">
              Howdy, {users.find((u) => u.id === user)?.name.split(" ")[0]}.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
