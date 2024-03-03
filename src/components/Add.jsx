import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Button, Stack, TextField } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

const Add = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				onClick={() => setOpen(true)}
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: 180, sm: 270, md: 30 },
				}}>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box
					width={400}
					height={280}
					bgcolor={"white"}
					padding={2}
					borderRadius={5}>
					<Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>
						Create Post
					</Typography>
					<UserBox sx={{ marginTop: 2 }}>
						<Avatar
							sx={{ width: 30, height: 30 }}
							alt="Sabayo Wendel"
							src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
						/>
						<Typography variant="span">Wendel Sabayo</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%", marginTop: 2 }}
						multiline
						rows={2}
						placeholder="What's on your mind master ?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={1} mb={3}>
						<EmojiEmotionsIcon color="primary" />
						<AddPhotoAlternateIcon color="secondary" />
						<Button variant="contained"
							sx={{
								marginLeft: 30,
                                marginBottom: 30,
                              
							}}
							
							>
							Post
						</Button>
					</Stack>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
