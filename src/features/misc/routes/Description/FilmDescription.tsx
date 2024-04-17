import { Box, Container } from "@mantine/core"
import { HeaderSearch } from "../../components/Header/components/HeaderSearch/HeaderSearch"
import { Footer } from "../../components/Footer/Footer"
import { HeroDescription } from "../../components/HeroDescription/HeroDescription"
import "./FilmDescription.scss";
import { useParams } from "react-router-dom";

export const FilmDescription = () => {
    const { id } = useParams();
    return(
        <Box>
            <HeaderSearch /> 
            <Container size="responsive">
                <Container size="responsive">
                    <HeroDescription filmId={id as string}/>
                </Container>
            </Container>
            <Footer /> 
        </Box>
    )


}