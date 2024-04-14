import { createTheme, Container } from '@mantine/core';
import cx from 'clsx';


export const theme = createTheme({
  fontFamily: 'Inter',
  headings: {
		fontFamily: 'Inter, sans-serif',
	},
  defaultRadius: 'md',
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ ['responsiveContainer']: size === 'responsive' }),
      }),
    }),
  },
});




