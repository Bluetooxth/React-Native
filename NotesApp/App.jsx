import "./global.css";
import { SafeAreaView, StatusBar } from "react-native";
import Navigation from "./screens/Navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
  );
}
