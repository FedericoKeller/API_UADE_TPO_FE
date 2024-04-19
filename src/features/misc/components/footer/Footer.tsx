import { Container, Group, Anchor } from '@mantine/core';
import './Footer.scss';
import { Logo } from '@/components/Logo';

const links = [
  { link: '#', label: 'Federico Keller' },
  { link: '#', label: 'Leonel Fernández' },
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
        <Logo />
        <Group>{items}</Group>
      </Container>
    </div>
  );
}