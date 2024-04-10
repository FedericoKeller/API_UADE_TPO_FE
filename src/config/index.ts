export const API_URL = process.env.REACT_APP_API_URL as string;
export const JWT_SECRET = '123456' as string;

import { IconComponents, IconDashboard, IconLock, IconMoodSmile } from '@tabler/icons-react';
import { NavItem } from '@/types/nav-item';

export const navLinks: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },

	{
		label: 'Components',
		icon: IconComponents,
		initiallyOpened: true,
		links: [
			{
				label: 'Table',
				link: '/dashboard/table',
			},
			{
				label: 'Form',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Auth',
		icon: IconLock,
		initiallyOpened: true,
		links: [
			{
				label: 'Login',
				link: '/login',
			},
			{
				label: 'Register',
				link: '/register',
			},
		],
	},
	{
		label: 'Sample',
		icon: IconMoodSmile,
		initiallyOpened: true,
		links: [
			{
				label: 'Landing',
				link: '/',
			},
		],
	},
];