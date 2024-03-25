import { Container, Group, Anchor } from '@mantine/core';
import { Netlist } from '../../icons/Netlist.icon';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },

];

export const Footer = () => {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer">
      <Container className="inner">
        <Netlist width={40} height={40} />
        <Group className="links">{items}</Group>
      </Container>
    </div>
  );
}