import React, { useState, useEffect } from "react";
import Home from "./Home";
import NoteDetails from "./NoteDetails";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const Navigation = () => {
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem("notes");
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error("Failed to load notes:", error);
      }
    };
    loadNotes();
  }, []);

  useEffect(() => {
    const saveNotes = async () => {
      try {
        await AsyncStorage.setItem("notes", JSON.stringify(Notes));
      } catch (error) {
        console.error("Failed to save notes:", error);
      }
    };
    saveNotes();
  }, [Notes]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} Notes={Notes} setNotes={setNotes} />}
        </Stack.Screen>

        <Stack.Screen name="NoteDetails" component={NoteDetails} />

        <Stack.Screen name="NewNote">
          {(props) => <NewNote {...props} Notes={Notes} setNotes={setNotes} />}
        </Stack.Screen>
        <Stack.Screen name="EditNote">
          {(props) => <EditNote {...props} Notes={Notes} setNotes={setNotes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
