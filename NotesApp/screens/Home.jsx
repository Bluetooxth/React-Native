import { FlatList, Text, View, Pressable } from "react-native";
import React from "react";

const Home = ({ navigation, Notes, setNotes }) => {
  return (
    <View className="flex items-start justify-start h-full w-full bg-white px-6 py-6">
      <View className="flex flex-row justify-between items-center w-full mb-5 border-b border-zinc-200 pb-2">
        <Text className="text-zinc-900 text-3xl font-semibold">Notes</Text>
        <Pressable
          className="px-3 py-1 bg-zinc-800 rounded-lg"
          onPress={() => navigation.navigate("NewNote")}
        >
          <Text className="text-zinc-100 text-lg font-semibold">New +</Text>
        </Pressable>
      </View>
      <FlatList
        data={Notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("NoteDetails", { note: item })}
            className="bg-white p-4 rounded-lg border border-zinc-200 w-full"
          >
            <Text className="text-zinc-900 text-xl font-semibold">
              {item.title}
            </Text>
            <Text className="text-zinc-800 text-lg font-normal">
              {item.desc}
            </Text>
          </Pressable>
        )}
        contentContainerStyle={{ gap: 10 }}
        style={{ width: "100%", flex: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
