import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { AppRoutes } from "@/routes";
import { AppProvider } from "@/providers/app";
import { ModalsProvider } from "@mantine/modals";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
