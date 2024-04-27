import { Title, Text, Button } from "@mantine/core"
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { AddToListModal } from "../AddToListModal/AddToListModal";
import { Film } from "@/types/film.model";
import { useUser } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { List } from "@/types/list.model";

interface FilmOverviewProps {
    overview: string;
    film: Film;
}

export const FilmOverview = ({ overview, film }: FilmOverviewProps) => {
    const user = useUser();
    const navigate = useNavigate();
    
    const onAddToList = () => {
        if(!user.data) return navigate("/auth/login");
        
        const lists = user?.data?.lists;
    
        const onSuccess = (listName: string) => {
            const list = lists?.find(list => list.title === listName);
            if(!list?.films?.some(currFilm => currFilm.id === film.id)) list?.films.push(film);
            modals.closeAll();
    
            notifications.show({
              color: "green",
              message: "¡Película agregada correctamente!"
            })
        }
    
          modals.open({
              title: "Agregar a lista",
              children: <AddToListModal onSuccess={onSuccess} lists={lists as List[]}/>
          })
      }
        
    return (
        <>
             <Title className="overview-title" order={3}>
            {" "}
            Resumen
          </Title>
          <div>
            <Text>{overview}</Text>
          </div>
          <Button className="u-margin-top--small" onClick={onAddToList}>Agregar a lista</Button>
        </>
    )
}