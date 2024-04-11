import { Group, MantineColorScheme, Radio, useMantineColorScheme } from '@mantine/core';

export const ThemeSwitcher = () => {
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	return (
		<Radio.Group
			value={colorScheme}
			onChange={(value) => {
				setColorScheme(value as MantineColorScheme);
			}}
			name="theme"
			label="Tema"
		>
			<Group mt="sm">
				<Radio value="light" label="Claro" />
				<Radio value="dark" label="Oscuro" />
			</Group>
		</Radio.Group>
	);
};