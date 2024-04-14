import { ActionIcon, Box, Paper, Space, Tooltip } from "@mantine/core";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { List } from "@/types/list.model";
import { useUser } from "@/lib/auth";
import { MRT_Localization_ES } from "@/config/table";
import { IconSend, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const ListsTable = () => {
  const { data, isError, isFetching, isLoading } = useUser();
  const navigate = useNavigate();

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
    data: data?.lists ?? [],
    rowCount: data?.lists?.length ?? 0,
    state: {
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching,
    },
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
            <ActionIcon color="red">
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
