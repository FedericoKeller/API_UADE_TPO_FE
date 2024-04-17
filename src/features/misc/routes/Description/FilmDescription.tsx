import { Box, Container } from "@mantine/core"
import { HeaderSearch } from "../../components/header/HeaderSearch"
import { Footer } from "../../components/footer/Footer"
import { HeroDescription } from "../../components/hero-description/HeroDescription"
import "./FilmDescription.scss";
import { useParams } from "react-router-dom";

export const FilmDescription = () => {
    const { id }  = useParams<{ id?: string }>();
    if (!id) return null;
    
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