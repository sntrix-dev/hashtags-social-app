import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { users } from "@/data/users";
import { posts } from "@/data/posts";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const Profile = () => {
  const { query } = useLocalSearchParams<{ query?: string }>();

  const user = users.find((user) => user.id === Number(query));
  const postsList = posts.filter((post) => post.userId === Number(query));

  return (
    <SafeAreaView className="bg-dark-black h-full w-full">
      <ScrollView className="gap-y-4">
        <View className="p-4 w-full items-center">
          <Image
            source={{ uri: user?.profileImage }}
            className="w-32 h-32 rounded-full"
            resizeMode="contain"
          />
          <Text className="text-white font-bold text-2xl">{user?.name}</Text>
        </View>
        <View className="flex-row items-center justify-center gap-x-8 p-4">
          <View className="items-center">
            <Text className="text-white font-pbold text-xl">
              {postsList.length}
            </Text>
            <Text className="text-light-white font-pmedium text-base">
              posts
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-white font-pbold text-xl">
              {user?.followers.length}
            </Text>
            <Text className="text-light-white font-pmedium text-base">
              followers
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-white font-pbold text-xl">
              {user?.following.length}
            </Text>
            <Text className="text-light-white font-pmedium text-base">
              following
            </Text>
          </View>
        </View>
        <View className="border-b border-gray" />
        <View className="p-4 gap-y-4">
          {postsList.map((post) => (
            <View key={post.id} className="gap-y-4">
              <Image
                source={{ uri: post.imageUrl }}
                className="w-full h-60 rounded-3xl"
                resizeMode="cover"
              />
              <View className="flex-row gap-x-6">
                <View className="flex-row gap-x-2 items-center">
                  <TouchableOpacity>
                    <Image
                      source={icons.like}
                      className="w-6 h-6"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Text className="text-white font-psemibold text-base">
                    {post.likes.length}
                  </Text>
                </View>
                <View className="flex-row gap-x-2 items-center">
                  <TouchableOpacity>
                    <Image
                      source={icons.comment}
                      className="w-6 h-6"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Text className="text-white font-psemibold text-base">
                    {post.comments.length}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
