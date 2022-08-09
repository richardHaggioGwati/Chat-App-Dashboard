import type { NextPage } from 'next';
import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from '../components/Navbar';
import Add from '../components/Add';
import { ThemeProvider }  from '@mui/material/styles';
import { theme, darkTheme } from '../components/Design/theme';

const Home: NextPage = () => {
	const themeOptiopns = theme || darkTheme;
	const [customTheme, setCustomTheme] = useState(themeOptiopns);

	return (
		<ThemeProvider theme={customTheme}>
			<Box bgcolor={'#e7ecef'}>
				<Navbar />
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<Sidebar />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
};

export default Home;
