import { Flex, Text } from '@mantine/core';
import './Logo.scss';
import { Link } from 'react-router-dom';
import { Netlist } from '@/features/misc/icons/Netlist.icon';

interface Props {
    width?: string;
    height?: string;
}

export const Logo: React.FC<Props> = () => {
    return (
        <Flex direction="row" align="center" gap={4}>
            <Link to="/" style={{ textDecoration: 'none' }} className='heading'>
                <Flex direction="row" align="center" gap={4}>
                    <Netlist width={30} height={30} />
                    <Text fw="bolder" size="xl">
                        Netlist
                    </Text>
                </Flex>
            </Link>
        </Flex>
    );
};