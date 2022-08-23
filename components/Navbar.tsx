import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PetsIcon from '@mui/icons-material/Pets';
import {
	styled,
	Typography,
	Box,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from '@mui/material';
import { theme } from './Design/theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = !!anchorEl;

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	}
	
	const StyledToolbar = styled(Toolbar)({
		display: 'flex',
		justifyContent: 'space-between',
	});

	const Search = styled('div')({
		backgroundColor: '#fff',
		padding: '0 10px',
		borderRadius: theme.shape.borderRadius,
		width: '40%',
	});

	const IconContainer = styled(Box)(({ theme }) => ({
		display: 'none',
		alignItems: 'center',
		gap: '20px',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
	}));

	const UserBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: '20px',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	}));


	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					Socail dashboard
				</Typography>
				<PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder='Search' sx={{ width: '90%' }} />
				</Search>
				<IconContainer>
					<Badge badgeContent={4} color='error'>
						<MailOutlineIcon color='inherit' />
					</Badge>
					<Badge badgeContent={4} color='error'>
						<NotificationsNoneIcon color='inherit' />
					</Badge>
					<Avatar
						onClick={handleClick}
						alt='Remy Sharp'
						sx={{ width: 30, height: 30 }}
						src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					/>
				</IconContainer>

				<UserBox>
					<Avatar
						onClick={handleClick}
						alt='Remy Sharp'
						sx={{ width: 30, height: 30 }}
						src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					/>
					<Typography variant='subtitle2'>John Doe</Typography>
				</UserBox>
				<Menu
				sx={{
					marginTop: '50px',
					marginLeft: '1750px',
					[theme.breakpoints.down('sm')]: {
						marginLeft: '220px',	
					}
				}}
				aria-labelledby='positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
			</StyledToolbar>

		</AppBar>
	);
};

export default Navbar;
