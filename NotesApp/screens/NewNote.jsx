import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const NewNote = ({ navigation, Notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() || !desc.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      desc,
      content,
    };

    setNotes([...Notes, newNote]);
    navigation.navigate("Home");
  };

  return (
    <View className="flex items-start justify-start h-full w-full bg-white px-6 py-6">
      <View className="flex flex-row justify-between items-center w-full mb-5 border-b border-zinc-200 pb-2">
        <Text className="text-zinc-900 text-3xl font-semibold">New Note</Text>
        <Pressable
          className="px-3 py-1 bg-zinc-800 rounded-lg"
          onPress={handleSave}
        >
          <Text className="text-zinc-100 text-lg font-semibold">Save</Text>
        </Pressable>
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
        className="border py-2 px-3 w-full mb-4 rounded-lg min-h-48"
        placeholder="Content"
        multiline={true}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
};

export default NewNote;
