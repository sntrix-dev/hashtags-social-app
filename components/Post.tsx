import { FC } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { users } from "../data/users";
import icons from "@/constants/icons";
import moment from "moment";
import { router } from "expo-router";

interface PostCardProps {
  id: number;
  userId: number;
  imageUrl: string | null;
  caption: string;
  likes: number[];
  postedDate: string;
  tags: string[];
  comments: any[];
}

const PostCard: FC<PostCardProps> = ({
  id,
  userId,
  imageUrl,
  caption,
  likes,
  postedDate,
  tags,
  comments,
}) => {
  return (
    <View className="p-4 gap-y-4">
      <TouchableOpacity
        className="flex-row gap-2 items-center"
        activeOpacity={0.7}
        onPress={() => router.push(`/user/${userId}`)}
      >
        <Image
          source={{ uri: users.find((i) => i.id === userId)?.profileImage }}
          className="w-10 h-10 rounded-full"
          resizeMode="contain"
        />
        <View className="flex-1 ">
          <Text className="text-white font-pbold text-base">
            {users.find((i) => i.id === userId)?.name}
          </Text>
          <Text className="text-light-gray font-pregular text-xs">
            {moment(postedDate).fromNow()}
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.dotsVertical}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>

      {!!imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-60 rounded-3xl"
          resizeMode="cover"
        />
      )}
      <Text numberOfLines={2} className="text-white text-base font-pregular">
        {caption} <Text>#{tags.join(", #")}</Text>
      </Text>
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
            {likes.length}
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
            {comments.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
