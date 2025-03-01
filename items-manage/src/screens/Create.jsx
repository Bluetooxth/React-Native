import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const Create = ({ data, setData }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    const newItem = {
      id: data.length + 1,
      itemName: itemName,
      stock: quantity,
      unit: "kg",
    };
    setData([...data, newItem]);

    setItemName("");
    setQuantity("");
    setIsEditing(false);
  };

  const deleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const editItem = (item) => {
    setIsEditing(true);
    setItemName(item.itemName);
    setEditId(item.id);
  };

  const updateItem = () => {
    setData(
      data.map((item) =>
        item.id === editId
          ? { ...item, itemName: itemName, stock: quantity }
          : item
      )
    );
    setItemName("");
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.headingContainer,
          { fontSize: 18, fontWeight: "600", marginBottom: 20 },
        ]}
      >
        Add Item
      </Text>
      <TextInput
        placeholder="Enter an item name"
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        placeholder="Enter a quantity"
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Pressable
        style={styles.button}
        onPress={() => (isEditing ? updateItem() : addItem())}
      >
        <Text style={styles.btnText}>
          {isEditing ? "Edit Item" : "Add Item"}
        </Text>
      </Pressable>

      <View style={[styles.headingContainer, { marginTop: 20 }]}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              item.stock < 20
                ? { backgroundColor: "#AC1754" }
                : { backgroundColor: "#41644A" },
            ]}
          >
            <Text style={styles.itemText}>{item.itemName}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable onPress={() => editItem(item)}>
                <Text style={styles.prmText}>Edit</Text>
              </Pressable>
              <Pressable onPress={() => deleteItem(item.id)}>
                <Text style={styles.prmText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
        scrollEnabled={true}
      />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171717",
  },
  container: {
    flex: 1,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    paddingHorizontal: "14",
    paddingVertical: "10",
    backgroundColor: "#171717",
    borderColor: "#171717",
    borderWidth: 1,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  prmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
