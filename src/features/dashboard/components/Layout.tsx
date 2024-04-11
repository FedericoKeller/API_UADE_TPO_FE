import { DashboardHeader } from "@/components/Headers/DashboardHeader";
import { Navbar } from "@/components/Navbar";
import { PageContainer } from "@/components/PageContainer";
import { navLinks } from "@/config";
import {
  useMantineColorScheme,
  useMantineTheme,
  AppShell,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";


type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const DashboardLayout = ({ children, title }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header>
        <DashboardHeader
          burger={
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              mr="xl"
            />
          }
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar data={navLinks} hidden={!opened} />
      </AppShell.Navbar>

      <AppShell.Main bg={bg}>
        <PageContainer title={title}>
          {children}
        </PageContainer>
      </AppShell.Main>
    </AppShell>
  );
};
