import { IconComponents, IconDashboard, IconLock, IconMoodSmile } from '@tabler/icons-react';
import { NavItem } from '@/types/nav-item';

export const navLinks: NavItem[] = [
	{ label: 'Bienvenido', icon: IconDashboard, link: '/app/welcome' },

	{
		label: 'Listas',
		icon: IconComponents,
		initiallyOpened: true,
		link: '/app/lists'
	},
];