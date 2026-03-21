import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="test" options={{ title: "Test Network" }} />
      <Tabs.Screen name="test2" options={{ title: "Test DB" }} />
    </Tabs>
  );
}
