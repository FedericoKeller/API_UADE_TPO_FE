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
import { Genre } from "tmdb-ts";

interface MultiSelectValueRendererProps {
  data: Genre[];
  placeholder: string;
  className?: string;
  onChange?: (value: number[]) => void;
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

  const [value, setValue] = useState<number[]>([]);

  const handleValueSelect = (val: number) => {
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );
  }

  const handleValueRemove = (val: number) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <SelectablePill
      data={data}
      key={item}
      id={item.toString()}
      onRemove={() => handleValueRemove(item)}
    >
      {item}
    </SelectablePill>
  ));

  useEffect(() => {
      onChange?.(value);
  }, [onChange, value]) 

  console.log(data)

  const options = data.map((item) => {
    return (  
      <Combobox.Option
        value={item.id as unknown as string}
        key={item.id as unknown as string}
        active={value.includes(item.id)}
      >
        <Group gap="sm">
          {value.includes(item.id) ? <CheckIcon size={12} /> : null}
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
        onOptionSubmit={(val) => {
          handleValueSelect(Number.parseInt(val));
        }}
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
