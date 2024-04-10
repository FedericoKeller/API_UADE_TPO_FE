import { Flex, Text, UnstyledButton } from '@mantine/core';
import './UserButton.scss';
import { useAuth } from '@/lib/auth';



export const UserButton = () => {
    const { user } = useAuth();

	return (
		<UnstyledButton className="user">
			<Flex direction="row" gap={8}>
				<div style={{ flex: 1 }}>
					<Text size="sm" w={500}>
                        {user?.email}
					</Text>

					<Text c="dimmed" size="xs">
                        {user?.role}
					</Text>
				</div>
			</Flex>
		</UnstyledButton>
	);
}