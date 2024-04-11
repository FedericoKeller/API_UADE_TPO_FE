import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Netlist } from '../../icons/Netlist.icon';
import "./HeaderSearch.scss";
import { RouterLink } from '@/components/RouterLink';

const links = [
  { link: '/watchlist', label: 'Watchlist' },
  { link: '/auth/login', label: 'Sign in' },
  
];

export const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link, index) => (
    <RouterLink key={index} label={link.label} to={link.link} />
  ));

  return (
    <header className="header">
      <div className="header-inner">
        <Group className='icon'>
          <Netlist width={40} height={40}/>
          <Burger className='burger-container' opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Autocomplete
            className="search"
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
        </Group>
        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
    

  );
}