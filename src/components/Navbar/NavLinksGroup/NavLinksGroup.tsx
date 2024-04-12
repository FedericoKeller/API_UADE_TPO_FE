import { Box, Collapse, Group, ThemeIcon, UnstyledButton, useDirection, Text } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import './NavLinksGroup.scss';
import clsx from "clsx";
import { useLocation } from 'react-router-dom';
import { RouterLink } from '@/components/RouterLink';

interface LinksGroupProps {
	icon: React.FC<any>;
	label: string;
	link?: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}

export function NavLinksGroup({
	icon: Icon,
	label,
	link,
	initiallyOpened,
	links,
}: LinksGroupProps) {
	const { dir } = useDirection();
    const { pathname } = useLocation();

	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const ChevronIcon = dir === 'ltr' ? IconChevronRight : IconChevronLeft;
	const items = (hasLinks ? links : []).map((link) => (
        <RouterLink
          className='navLink'
          to={link.link}
          key={link.label}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </RouterLink>
      ));

	return (
		<>
			{link ? (
				<RouterLink
					to={link}
					className={clsx("control", link === pathname && "activeControl")}
				>
					<Group gap={0} justify="space-between">
						<Box style={{ display: 'flex', alignItems: 'center' }}>
							<ThemeIcon variant="light" size={30}>
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
					</Group>
				</RouterLink>
			) : (
				<UnstyledButton
					onClick={() => {
						if (hasLinks) {
							setOpened(o => !o);
							return;
						}
					}}
					className="control"
				>
					<Group gap={0} justify="space-between">
						<Box style={{ display: 'flex', alignItems: 'center' }}>
							<ThemeIcon variant="light" size={30}>
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
						{hasLinks && (
							<ChevronIcon
								className="chevron"
								size="1rem"
								stroke={1.5}
								style={{
									transform: opened ? `rotate(${dir === 'rtl' ? -90 : 90}deg)` : 'none',
								}}
							/>
						)}
					</Group>
				</UnstyledButton>
			)}
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
}