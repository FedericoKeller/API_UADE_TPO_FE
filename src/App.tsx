import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { AppRoutes } from "@/routes";
import { AppProvider } from "@/providers/app";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </MantineProvider>
  );
}
