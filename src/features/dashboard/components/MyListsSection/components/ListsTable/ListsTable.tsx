import { ActionIcon, Box, Paper, Space, Tooltip, Text } from "@mantine/core";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { List } from "@/types/list.model";
import { MRT_Localization_ES } from "@/config/table";
import { IconSend, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { modals } from "@mantine/modals";

interface ListsTableProps {
  data: List[] | undefined;
  handleDeleteList: (id: number) => void;
}

export const ListsTable = ({ data, handleDeleteList }: ListsTableProps) => {
  const navigate = useNavigate();

  const openDeleteModal = (id: number) =>
    modals.openConfirmModal({
      title: "Borrar lista",
      centered: true,
      children: (
        <Text size="sm">
          ¿Estás seguro de que deseas borrar esta lista? Esta acción no se puede
          deshacer.
        </Text>
      ),
      labels: { confirm: "Borrar lista", cancel: "Cancelar" },
      confirmProps: { color: "red" },
      onCancel: () => modals.closeAll(),
      onConfirm: () => handleDeleteList(id),
    });

  const columns = useMemo<MRT_ColumnDef<List>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "title",
        header: "Título",
        size: 500,
      },
      {
        accessorKey: "films",
        header: "Películas",
        accessorFn: (row) => `${row.films?.length ?? 0}`,
      },
    ],
    []
  );

  const table = useCustomTable<List>({
    columns,
    data: data ?? [],
    rowCount: data?.length ?? 0,
    localization: MRT_Localization_ES,
    enableRowActions: true,
    positionActionsColumn: "last",
    displayColumnDefOptions: {
      "mrt-row-actions": {
        size: 50,
      },
    },
    renderRowActions: ({ row }) => (
      <Box style={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
        <Tooltip position="bottom" label="Ver películas">
          <ActionIcon
            color="blue"
            component="a"
            onClick={() => navigate(`/app/lists/${row.original.id}`)}
          >
            <IconSend />
          </ActionIcon>
        </Tooltip>
        {row?.original.canDelete && (
          <Tooltip position="bottom" label="Borrar lista">
            <ActionIcon
              color="red"
              onClick={() => openDeleteModal(row.original.id)}
            >
              <IconTrash />
            </ActionIcon>
          </Tooltip>
        )}
      </Box>
    ),
  });

  return (
    <Paper withBorder radius="md" p="md" mt="lg">
      <Space h="md" />
      <MantineReactTable table={table} />
    </Paper>
  );
};
