import { useCallback, useState } from "react";
import {
  Center,
  Combobox,
  Highlight,
  Loader,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { SearchOption } from "@/features/misc/components/Menu/SearchMenu/MenuSearch";
import { Film } from "@/types/film.model";
import { searchFilms } from "@/api/searchFilms";
import { debounce } from "lodash";

interface AutocompleteHighlightProps {
  searchOption: SearchOption;
  label?: string;
  placeholder?: string;
  handleFilmChange?: (film: Film) => void;
  className?: string;
}

export const HightlightAutocomplete = ({
  searchOption,
  label,
  placeholder,
  handleFilmChange,
}: AutocompleteHighlightProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState("");
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);
  const DEBOUNCE_TIME = 250;

  const fetchData = async () => {
    setLoading(true);
    const fetchedFilms = await searchFilms(searchOption, value);
    console.log(fetchedFilms);
    setFilms(fetchedFilms);
    setLoading(false); 
  };

  const debouncedFetchData = debounce(fetchData, DEBOUNCE_TIME);

  const debounceFn = useCallback(() => {
    if (value) debouncedFetchData();
  }, [value, debouncedFetchData]);

  const options = films.map((item) => (
    <Combobox.Option value={item.title} key={item.id}>
      <Highlight highlight={value} size="sm">
        {item.title}
      </Highlight>
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        const film = films.find((film) => film.title === optionValue);
        handleFilmChange?.(film as Film);
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
          style={{ flexGrow: 1 }}
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            debounceFn();
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
          {loading ? (
            <Center p="md">
              <Loader size={30} />
            </Center>
          ) : options.length === 0 ? (
            <Combobox.Empty>Sin coincidencias</Combobox.Empty>
          ) : (
            options
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
