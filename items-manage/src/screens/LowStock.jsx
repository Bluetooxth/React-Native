import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const LowStock = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.stock < 20 && (
            <View
              style={[styles.itemContainer, { backgroundColor: "#AC1754" }]}
            >
              <Text style={styles.itemText}>{item.itemName}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
            </View>
          )
        }
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default LowStock;

const styles = StyleSheet.create({
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
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171717",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
