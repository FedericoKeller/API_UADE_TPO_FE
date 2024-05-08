import { Flex, Text, UnstyledButton } from '@mantine/core';
import './UserButton.scss';
import { useUser } from '@/lib/auth';
import { Fallback } from '../Fallback';



export const UserButton = () => {
    const user = useUser();

	if(user.isLoading) return <Fallback />;

	return (
		<UnstyledButton className="user">
			<Flex direction="row" gap={8}>
				<div style={{ flex: 1 }}>
					<Text size="sm" w={500}>
                        {user?.data?.username}
					</Text>
				</div>
			</Flex>
		</UnstyledButton>
	);
}