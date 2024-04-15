import { Container } from "@mantine/core"
import { HeaderSearch } from "../../components/header/HeaderSearch"
import { HeroHeader } from "../../components/hero-header/hero-header"
import { MultiSelectValueRenderer } from "@/components/MultiSelectValueRenderer"
import { Footer } from "../../components/footer/Footer"
import { HeroDescription } from "../../components/hero-description/hero-description"

export const Description = () => {
    return(
        <div className="movie">
            <HeaderSearch /> 
            <Container size="responsive">
                <Container size="responsive">
                    <HeroDescription/>
                </Container>
            </Container>
            <Footer /> 
        </div>
    )


}