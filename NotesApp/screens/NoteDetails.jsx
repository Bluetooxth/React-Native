import { View, Text, Pressable } from "react-native";
import React from "react";

const NoteDetails = ({ route, navigation }) => {
  const { note } = route.params;

  return (
    <View className="flex items-start justify-start h-full w-full bg-white px-6 py-6">
      <View className="flex flex-row justify-between items-center w-full mb-5 border-b border-zinc-200 pb-2">
        <Text className="text-zinc-900 text-3xl font-semibold">Note Details</Text>
        <Pressable
          className="px-3 py-1 bg-zinc-800 rounded-lg"
          onPress={() => navigation.navigate("EditNote", { note })}
        >
          <Text className="text-zinc-100 text-lg font-semibold">Edit</Text>
        </Pressable>
      </View>
      <Text className="text-2xl font-semibold text-zinc-900">{note.title}</Text>
      <Text className="text-xl text-zinc-800 mt-4">{note.desc}</Text>
      <Text className="text-lg text-zinc-700 mt-4">{note.content}</Text>
    </View>
  );
};

export default NoteDetails;
