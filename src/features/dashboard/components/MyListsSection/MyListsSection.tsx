import { Box } from "@mantine/core";
import { CreateListModal } from "./components/CreateListModal/CreateListModal";
import { ListsTable } from "./components/ListsTable/ListsTable";
import { useUser } from "@/lib/auth";
import { notifications } from "@mantine/notifications";
import { Fallback } from "@/components/Fallback";
import { createList } from "../../api/createList";
import { deleteList } from "../../api/deleteList";

export const MyListsSection = () => {
  const user = useUser();

  if(user.isLoading) return <Fallback />;

  const handleListCreation = async (title: string) => {
    await createList(title);
    await user.refetch();
    
    notifications.show({
      color: "green",
      title: "Éxito",
      message: "Película agregada a la lista correctamente",
    });
  };

  const handleDeleteList = async (listId: number) => {

    await deleteList(listId);
    await user.refetch();

    notifications.show({
      color: "green",
      title: "Éxito",
      message: "La lista fue eliminada correctamente",
    });
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <CreateListModal onSuccess={handleListCreation} />
      <ListsTable handleDeleteList={handleDeleteList} data={user.data?.lists} />
    </Box>
  );
};
