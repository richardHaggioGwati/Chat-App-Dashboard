import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';

import { theme } from '../Design/theme';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post: React.FC = () => {
	return (
		<Card
			sx={{
				margin: 2,
			}}
		>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Welcome!'
				subheader='August 08, 2022'
			/>
			<CardMedia
				component='img'
				height='450'
				sx={{
					[theme.breakpoints.down('sm')]: {
						height: '10',
					},
				}}
				image='https://source.unsplash.com/random'
				title='Random image'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
					orci risus, eu gravida massa malesuada a. Sed eu pretium quam. Duis
					finibus purus ac sem gravida tincidunt. Pellentesque dolor mauris,
					sagittis eu aliquet quis, luctus malesuada leo. Nulla varius massa
					mattis est iaculis, sed sollicitudin mi commodo. Ut ornare eleifend
					tellus vel vehicula. Curabitur eros massa, consequat nec nisl quis,
					iaculis rutrum nunc. Maecenas maximus ultrices orci at vestibulum.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite color='error' />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
