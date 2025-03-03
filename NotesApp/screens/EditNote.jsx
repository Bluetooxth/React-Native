import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditNote = ({ navigation, route, Notes, setNotes }) => {
  const { note } = route.params;

  const [title, setTitle] = useState(note?.title || "");
  const [desc, setDesc] = useState(note?.desc || "");
  const [content, setContent] = useState(note?.content || "");

  const handleSave = async () => {
    if (!title.trim() || !desc.trim() || !content.trim()) return;

    const updatedNotes = Notes.map((n) =>
      n.id === note.id ? { ...n, title, desc, content } : n
    );

    setNotes(updatedNotes);
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
    } catch (error) {
      console.error("Failed to update note:", error);
    }
    navigation.navigate("Home");
  };

  const handleDelete = () => {
    const updatedNotes = Notes.filter((n) => n.id !== note.id);
    setNotes(updatedNotes);
    navigation.navigate("Home");
  };

  return (
    <View className="flex items-start justify-start h-full w-full bg-white px-6 py-6">
      <View className="flex flex-row justify-between items-center w-full mb-5 border-b border-zinc-200 pb-2">
        <Text className="text-zinc-900 text-3xl font-semibold">Edit Note</Text>
        <View className="flex flex-row gap-5">
          <Pressable
            className="px-3 py-1 bg-red-600 rounded-lg"
            onPress={handleDelete}
          >
            <Text className="text-zinc-100 text-lg font-semibold">Delete</Text>
          </Pressable>
          <Pressable
            className="px-3 py-1 bg-zinc-800 rounded-lg"
            onPress={handleSave}
          >
            <Text className="text-zinc-100 text-lg font-semibold">Save</Text>
          </Pressable>
        </View>
      </View>
      <TextInput
        className="border py-2 px-3 w-full mb-4 rounded-lg"
        placeholder="Title"
        multiline={true}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border py-2 px-3 w-full mb-4 rounded-lg"
        placeholder="Description"
        multiline={true}
        value={desc}
        onChangeText={setDesc}
      />
      <TextInput
        className="border py-2 px-3 w-full mb-4 rounded-lg h-48"
        placeholder="Content"
        multiline={true}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
};

export default EditNote;
