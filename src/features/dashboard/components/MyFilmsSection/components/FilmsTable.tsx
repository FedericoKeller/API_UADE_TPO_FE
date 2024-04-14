import {
  ActionIcon,
  Box,
  Paper,
  Rating,
  Space,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { MRT_Localization_ES } from "@/config/table";
import { IconTrash } from "@tabler/icons-react";
import { Film } from "@/types/film.model";

interface FilmsTableProps {
  films: Film[] | undefined;
}

export const FilmsTable = ({ films }: FilmsTableProps) => {
  const columns = useMemo<MRT_ColumnDef<Film>[]>(
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
        accessorKey: "vote_average",
        header: "Reviews",
        Cell: ({ cell }) => {
          return (
            <>
              <Tooltip
                position="right"
                label={`${(cell.getValue<number>() / 2).toFixed(
                  2
                )} (${cell.row.original.vote_count})`}
              >
                <Rating
                  fractions={Math.round(cell.getValue<number>())}
                  defaultValue={cell.getValue<number>() / 2}
                  readOnly
                />
              </Tooltip>
            </>
          );
        },
      },
      {
        accessorFn: (row) => {
          //convert to Date for sorting and filtering
          const sDay = new Date(row.release_date);
          sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
          return sDay;
        },
        id: "startDate",
        header: "Lanzamiento",
        filterVariant: "date-range",
        sortingFn: "datetime",
        enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      },
    ],
    []
  );

  const table = useCustomTable<Film>({
    columns,
    data: films ?? [],
    rowCount: films?.length ?? 0,
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
        <Tooltip position="bottom" label="Borrar película">
          <ActionIcon color="red">
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Box>
    ),
    renderDetailPanel: ({ row }) => (
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
        }}
      >
        <img
          height={200}
          src={`https://image.tmdb.org/t/p/w500/${row.original.poster_path}`}
          style={{ borderRadius: '50%' }}
        />
        <Box>
            <Title order={3}>Resumen</Title>
          <Text>{row.original.overview}</Text>
        </Box>
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
