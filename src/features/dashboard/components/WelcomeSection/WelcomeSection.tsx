'use client'

import { Flex, Grid, GridCol } from '@mantine/core';
import { WelcomeCard } from './components/WelcomeCard/WelcomeCard';

export const WelcomeSection = () => {
	return (
		<Grid>
			<GridCol span={{ sm: 12, md: 12, lg: 8 }}>
				<Flex direction="column" h="100%" justify="space-between" gap="md">
					<WelcomeCard />
				</Flex>
			</GridCol>
		</Grid>
	);
}