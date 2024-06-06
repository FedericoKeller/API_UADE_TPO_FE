import { Tooltip, UnstyledButton } from "@mantine/core";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import "./SavedListButton.scss";
import clsx from "clsx";
import { useCallback, useState, useEffect } from "react";
import { useUser } from "@/lib/auth";
import { Film } from "@/types/film.model";
import { Fallback } from "@/components/Fallback";
import { addFilmToWatch } from "@/api/addToWatch";

interface SavedListButtonProps {
  className?: string;
  film: Film;
}

export const SavedListButton = ({ className, film }: SavedListButtonProps) => {
  const user = useUser();
  const { id } = film;

  const isFilmIncluded = useCallback(
    (id: number) => {
      return user.data?.lists[0]?.films.some((film) => film.id === id);
    },
    [user.data]
  );

  const [filmState, setFilmState] = useState(isFilmIncluded(id));

  const updateFilmState = useCallback(() => {
    setFilmState(isFilmIncluded(id));
  }, [id, isFilmIncluded]);

  const onSaveClick = async () => {
    await addFilmToWatch(film);
    await user.refetch();

    updateFilmState();
  };

  useEffect(() => {
    updateFilmState();
  }, [updateFilmState]);

  if (user.isLoading) return <Fallback />;

  return (
    <UnstyledButton className={clsx("saved", className)} onClick={onSaveClick}>
      {filmState ? (
        <Tooltip label="Eliminar de 'por ver'">
          <IconCheck />
        </Tooltip>
      ) : (
        <Tooltip label="Agregar a 'por ver'">
          <IconPlus />
        </Tooltip>
      )}
    </UnstyledButton>
  );
};
