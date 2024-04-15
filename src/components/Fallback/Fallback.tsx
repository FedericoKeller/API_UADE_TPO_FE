import { Center, Loader } from "@mantine/core"


export const Fallback = () => {
    return (
        <Center h='100vh' bg="var(--mantine-color-gray-light)">
            <Loader size={60} />
        </Center>
    )
}