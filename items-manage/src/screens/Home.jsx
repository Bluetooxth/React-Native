import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AllItems from "./AllItems";
import LowStock from "./LowStock";
import Create from "./Create";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("AllItems");

  const [data, setData] = useState([
    {
      id: 1,
      itemName: "Rice",
      stock: 10,
      unit: "kg",
    },
    {
      id: 2,
      itemName: "Flour",
      stock: 5,
      unit: "kg",
    },
    {
      id: 3,
      itemName: "Sugar",
      stock: 15,
      unit: "kg",
    },
    {
      id: 4,
      itemName: "Salt",
      stock: 20,
      unit: "kg",
    },
    {
      id: 5,
      itemName: "Coffee",
      stock: 25,
      unit: "kg",
    },
    {
      id: 6,
      itemName: "Tea",
      stock: 30,
      unit: "kg",
    },
    {
      id: 7,
      itemName: "Wheat",
      stock: 35,
      unit: "kg",
    },
    {
      id: 8,
      itemName: "Oats",
      stock: 40,
      unit: "kg",
    },
    {
      id: 9,
      itemName: "Corn",
      stock: 45,
      unit: "kg",
    },
    {
      id: 10,
      itemName: "Barley",
      stock: 50,
      unit: "kg",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
      <View style={styles.wrapper}>
        <Pressable
          style={[
            styles.button,
            activeComponent === "AllItems" && { backgroundColor: "#171717" },
          ]}
          onPress={() => setActiveComponent("AllItems")}
        >
          <Text
            style={[
              styles.text,
              activeComponent === "AllItems" && { color: "#fff" },
            ]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            activeComponent === "LowStock" && { backgroundColor: "#171717" },
          ]}
          onPress={() => setActiveComponent("LowStock")}
        >
          <Text
            style={[
              styles.text,
              activeComponent === "LowStock" && { color: "#fff" },
            ]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            activeComponent === "Create" && { backgroundColor: "#171717" },
          ]}
          onPress={() => setActiveComponent("Create")}
        >
          <Text
            style={[
              styles.text,
              activeComponent === "Create" && { color: "#fff" },
            ]}
          >
            Create
          </Text>
        </Pressable>
      </View>
      {activeComponent === "AllItems" && <AllItems data={data} />}
      {activeComponent === "LowStock" && <LowStock data={data} />}
      {activeComponent === "Create" && <Create data={data} setData={setData} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    fkex: 1,
    justifyContent: "start",
    alignItems: "start",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "start",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: "14",
    paddingVertical: "3",
    backgroundColor: "#fff",
    borderColor: "#171717",
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
