import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import List from '@mui/material/List';

import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Settings from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GavelIcon from '@mui/icons-material/Gavel';

const ListItem: React.FC = () => {
	const [isDark, setIsDark] = useState(false);
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<ListItemButton>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary='Homepage' />
			</ListItemButton>

			<ListItemButton>
				<ListItemIcon>
					<AutoStoriesOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary='Pages' />
			</ListItemButton>

			<ListItemButton>
				<ListItemIcon>
					<GroupAddOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary='Groupes' />
			</ListItemButton>

			<ListItemButton>
				<ListItemIcon>
					<StorefrontOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary='Market place' />
			</ListItemButton>

			<ListItemButton>
				<ListItemIcon>
					<PersonAddAltOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary='Friends' />
			</ListItemButton>

			<ListItemButton>
				<ListItemIcon>
					<AccountCircleOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary='Profile' />
			</ListItemButton>

			<ListItemButton onClick={(event) => setIsDark(!isDark)}>
				<ListItemIcon>
					{isDark ? <NightsStayOutlinedIcon /> : <Brightness4OutlinedIcon />}
				</ListItemIcon>
				<ListItemText primary='Theme' />
			</ListItemButton>

			<ListItemButton onClick={(event) => setOpen(!open)}>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				<ListItemText primary='Settings' />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout='auto' unmountOnExit>
					<ListItemButton sx={{ pl: 5 }}>
						<ListItemIcon>
							<SupervisedUserCircleIcon />
						</ListItemIcon>
						<ListItemText primary='About us' />
					</ListItemButton>

					<ListItemButton sx={{ pl: 5 }}>
						<ListItemIcon>
							<GavelIcon />
						</ListItemIcon>
						<ListItemText primary='Agreement' />
					</ListItemButton>

			</Collapse>
		</Container>
	);
};

export default ListItem;
