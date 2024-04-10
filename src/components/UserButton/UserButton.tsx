import { Flex, Text, UnstyledButton } from '@mantine/core';
import './UserButton.scss';
import { useUser } from '@/lib/auth';
import { IconLogout } from '@tabler/icons-react';



export const UserButton = () => {
    const user = useUser();

	return (
		<UnstyledButton className="user">
			<Flex direction="row" gap={8}>
				<div style={{ flex: 1 }}>
					<Text size="sm" w={500}>
                        {user?.data?.email}
					</Text>
				</div>
			</Flex>
		</UnstyledButton>
	);
}