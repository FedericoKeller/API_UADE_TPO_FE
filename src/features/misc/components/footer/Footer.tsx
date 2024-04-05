import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import './Footer.scss';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className="footer-link"
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className="footer-wrapper" key={group.title}>
        <Text className="footer-title">{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-logo">
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className="footer-description">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className="footer-groups">{groups}</div>
      </Container>
      <Container className="after-footer">
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group gap={0} className="footer-social" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: 18, height: 18 }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: 18, height: 18 }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: 18, height: 18 }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}