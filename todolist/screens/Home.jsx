import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.length > 0) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#000" />
      <View style={styles.container}>
        <Text style={styles.heading}>ToDoList</Text>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Enter a task"
            placeholderTextColor={"#000"}
          />
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.btext}>Add task</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.task}>
          {tasks.map((task, index) => (
            <View style={styles.wrapperone} key={index}>
              <Text style={styles.text}>{task.toString()}</Text>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={styles.delete}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },
  wrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  wrapperone: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: 500,
  },
  btext: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 600,
  },
  delete: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  task: {
    flexDirection: "column",
    marginTop: 20,
  },
  input: {
    width: "70%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default HomeScreen;
