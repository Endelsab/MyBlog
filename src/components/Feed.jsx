import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";


import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";



export default function Feed() {

    const styles = (theme) => ({
			root: {
				backgroundColor: "blue",
				// Match [md, ∞)
				//       [900px, ∞)
				[theme.breakpoints.up("md")]: {
					backgroundColor: "red",
				},
			},
		});
	

	return (
		<>
			<styles flex={4}>
				<Card sx={{ maxWidth: 345, }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="Shrimp and Chorizo Paella"
						subheader="September 14, 2016"
					/>
					<CardMedia
						component="img"
						height="20%"
						image="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
						alt="https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>
			</styles>
		</>
	);
}
