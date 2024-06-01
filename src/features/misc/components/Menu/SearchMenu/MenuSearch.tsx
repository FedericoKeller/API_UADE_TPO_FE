import { ActionIcon, Box, Menu, Radio, Tooltip } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

type MenuSearchProps = {
  handleOptionChange: (option: SearchOption) => void;
};

export type SearchOption = "title" | "director" | "actor";

export const MenuSearch = ({ handleOptionChange }: MenuSearchProps) => {
  const [option, setOption] = useState<SearchOption>("title");

  const onOptionChange = (option: SearchOption) => {
    setOption(option);
    handleOptionChange(option);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Tooltip position="right" label="Configurar búsqueda">
        <Box>
          <ActionIcon variant="subtle">
            <IconSearch size="1.25rem" />
          </ActionIcon>
        </Box>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Buscar película por:</Menu.Label>
        <Radio.Group
          value={option}
          onChange={onOptionChange}
          name="searchOptions"
        >
          <Radio ml="xs" value="title" label="Título" />
          <Radio ml="xs" mt="xs" value="actor" label="Actor" />
          <Radio ml="xs" mt="xs" mb="xs" value="director" label="Director" />
        </Radio.Group>
      </Menu.Dropdown>
    </Menu>
  );
};
