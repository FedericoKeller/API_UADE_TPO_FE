import { Box } from "@mantine/core";
import { CreateListModal } from "./components/CreateListModal/CreateListModal";
import { ListsTable } from "./components/ListsTable/ListsTable";
import { useUser } from "@/lib/auth";
import { useState } from "react";
import { List } from "@/types/list.model";
import { notifications } from "@mantine/notifications";
import { Fallback } from "@/components/Fallback";

export const MyListsSection = () => {
  const user = useUser();
  const [currentLists, setCurrentLists] = useState<List[] | undefined>(
    user?.data?.lists
  );

  if(user.isLoading) return <Fallback />;

  const handleListCreation = (title: string) => {
    const newList: List = {
      id: (user.data?.lists.length as number) + 1,
      title,
      films: [],
      canDelete: true,
    };

    setCurrentLists((lists) => {
      const updatedLists = [...(lists ?? []), newList];
      user.data?.lists.push(newList);
      return updatedLists;
    });

    notifications.show({
      color: "green",
      title: "Éxito",
      message: "Película agregada a la lista correctamente",
    });
  };

  const handleDeleteList = (id: number) => {
    setCurrentLists((lists) => {
      const updatedLists = lists?.filter((list) => list.id !== id);
      user.data!.lists = updatedLists as List[];
      return updatedLists;
    });

    notifications.show({
      color: "green",
      title: "Éxito",
      message: "La lista fue eliminada correctamente",
    });
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <CreateListModal onSuccess={handleListCreation} />
      <ListsTable handleDeleteList={handleDeleteList} data={currentLists} />
    </Box>
  );
};
