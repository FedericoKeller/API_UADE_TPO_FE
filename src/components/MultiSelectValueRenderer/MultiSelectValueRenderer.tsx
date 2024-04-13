import { useEffect, useState } from "react";
import {
  Box,
  CheckIcon,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from "@mantine/core";
import { SelectablePill } from "../SelectablePill";

interface MultiSelectValueRendererProps {
  data: Record<string, string | number>[];
  placeholder: string;
  className?: string;
  onChange?: (value: string[] | number[]) => void;
}

export const MultiSelectValueRenderer = ({
  data,
  placeholder,
  className,
  onChange
}: MultiSelectValueRendererProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) => {
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );
  }

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <SelectablePill
      data={data}
      key={item}
      id={item}
      onRemove={() => handleValueRemove(item)}
    >
      {item}
    </SelectablePill>
  ));

  useEffect(() => {
      onChange?.(value);
  }, [onChange, value]) 

  const options = data.map((item) => {
    return (
      <Combobox.Option
        value={item.id as string}
        key={item.id}
        active={value.includes(item.id as string)}
      >
        <Group gap="sm">
          {value.includes(item.id as string) ? <CheckIcon size={12} /> : null}
          <Group gap={7}>
            <span>{item.name}</span>
          </Group>
        </Group>
      </Combobox.Option>
    );
  });

  return (
    <Box className={className}>
      <Combobox
        store={combobox}
        onOptionSubmit={handleValueSelect}
        withinPortal={false}
      >
        <Combobox.DropdownTarget>
          <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
            <Pill.Group>
              {values.length > 0 ? (
                values
              ) : (
                <Input.Placeholder>{placeholder}</Input.Placeholder>
              )}

              <Combobox.EventsTarget>
                <PillsInput.Field
                  onBlur={() => combobox.closeDropdown()}
                  type="hidden"
                  onKeyDown={(event) => {
                    if (event.key === "Backspace") {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Box>
  );
};
