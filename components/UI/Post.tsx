import  Checkbox from '@mui/material/Checkbox';
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
import  Favorite from '@mui/icons-material/Favorite';
import  FavoriteBorder  from '@mui/icons-material/FavoriteBorder';

const Post: React.FC = () => {

	return (		
        <Card sx={{
                margin: 2,
            }}>
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
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
                    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite color='error'/>} />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
	);
};


export default Post;
