import { Box, Container } from "@mantine/core"
import { HeaderSearch } from "../../components/Header/components/HeaderSearch/HeaderSearch"
import { Footer } from "../../components/Footer/Footer"
import { FilmDescription } from "../../features/FilmDescription/FilmDescription"
import "./FilmContainer.scss";
import { useParams } from "react-router-dom";

export const FilmContainer = () => {
    const { id } = useParams();
    return(
        <Box>
            <HeaderSearch /> 
            <Container size="responsive">
                <Container size="responsive">
                    <FilmDescription filmId={id as string}/>
                </Container>
            </Container>
            <Footer /> 
        </Box>
    )


}