import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "@/styles/colors";

type CategoryProps = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};
export function Category({ name, icon, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? colors.green[300] : colors.gray[200];
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
