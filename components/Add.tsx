import { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1Outlined from '@mui/icons-material/PersonAddAlt1Outlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { DateRange } from '@mui/icons-material';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '10px',
});

const Add: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Tooltip
				onClick={(_) => setOpen(true)}
				title='Add'
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 30 },
					['&:hover']: {
						cursor: 'pointer',
						backgroundColor: 'primary.dark',
					}
				}}
			>
				<Fab color='primary' aria-label='add'>
					<AddCircleOutlineOutlinedIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(_) => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box
					sx={{
						width: 400,
						height: 280,
						padding: 2,
						borderRadius: 4,
						backgroundColor: 'white',
					}}
				>
					<Typography variant='h6' color='gray' textAlign='center'>
						Create new posts
					</Typography>
					<UserBox>
						<Avatar
							alt='Remy Sharp'
							sx={{ width: 30, height: 30 }}
							src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
						/>
						<Typography
							fontWeight={500}
							variant='body1'
							color='gray'
							textAlign='center'
						>
							John Doe
						</Typography>
					</UserBox>
					<TextField
						id='outlined-basic'
						multiline
						placeholder='What is on your mind?'
						rows={3}
						variant='standard'
						sx={{
							width: '100%',
						}}
					/>
					<Stack direction='row' gap={4} mt={2} mb={3}>
						<EmojiEmotionsOutlinedIcon color='primary' />
						<AddPhotoAlternateOutlinedIcon color='secondary' />
						<VideoCameraBackOutlinedIcon color='success' />
						<PersonAddAlt1Outlined color='error' />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant='contained'
                        color='primary'
                    >
                        <Button>Post</Button>
                        <Button sx={{
                            width: '100px',
                        }}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
