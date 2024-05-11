import { useState } from "react";
import { Combobox, Highlight, TextInput, useCombobox } from "@mantine/core";
import { Film } from "@/types/film.model";

interface AutocompleteHighlightProps {
  data: Film[];
  label?: string;
  placeholder?: string;
  handleFilmChange?: (selectedFilm: string) => void;
}

export const HightlightAutocomplete = ({
  data,
  label,
  placeholder,
  handleFilmChange,
}: AutocompleteHighlightProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [value, setValue] = useState("");
  const shouldFilterOptions =
    !data.some((item) => item.title === value) ||
    data.some(
      (item) =>
        item.cast?.map((cast) => cast.name).includes(value) ||
        item.crew?.map((crew) => crew.name).includes(value)
    );
  const filteredOptions = shouldFilterOptions
    ? data.filter(
        (item) =>
          item.title.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.cast?.map((cast) => cast.name).includes(value) ||
          item.crew?.map((crew) => crew.name).includes(value)
      )
    : data;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.title} key={item.title}>
      <Highlight highlight={value} size="sm">
        {item.title}
      </Highlight>
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        handleFilmChange?.(optionValue);
        setValue("");
        combobox.closeDropdown();
      }}
      withinPortal={false}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            if (event.currentTarget.value === "")
              return combobox.closeDropdown();
            combobox.updateSelectedOptionIndex();
            combobox.openDropdown();
          }}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? (
            <Combobox.Empty>Sin coincidencias</Combobox.Empty>
          ) : (
            options
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
