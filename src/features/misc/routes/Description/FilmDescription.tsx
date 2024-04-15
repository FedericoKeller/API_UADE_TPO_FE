import { Box, Container } from "@mantine/core"
import { HeaderSearch } from "../../components/header/HeaderSearch"
import { Footer } from "../../components/footer/Footer"
import { HeroDescription } from "../../components/hero-description/hero-description"
import "./FilmDescription.scss";
import { useParams } from "react-router-dom";

export const FilmDescription = () => {
    const { id } = useParams();
    return(
        <Box>
            <HeaderSearch /> 
            <Container size="responsive">
                <Container size="responsive">
                    <HeroDescription filmId={id}/>
                </Container>
            </Container>
            <Footer /> 
        </Box>
    )


}