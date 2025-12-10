// src/components/userComments/UserComments.jsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UserComments() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userResp, commentsResp] = await Promise.all([
          axios.get(`/user/${userId}`),
          axios.get(`/commentsOfUser/${userId}`),
        ]);

        setUser(userResp.data);
        setComments(commentsResp.data);
      } catch (err) {
        console.error("Error loading user comments:", err);
        setError("Failed to load comments");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleCommentClick = (item) => {
    // Go to the photo owner's gallery; the user scrolls to the desired photo
    navigate(`/photos/${item.photo_user_id}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Comments by {user?.first_name} {user?.last_name}
      </Typography>

      {comments.length === 0 ? (
        <Typography color="text.secondary">
          This user has not made any comments yet.
        </Typography>
      ) : (
        <Card
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent>
            <List>
              {comments.map((item) => (
                <React.Fragment key={item._id}>
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => handleCommentClick(item)}
                    sx={{ gap: 2 }}
                  >
                    <CardMedia
                      component="img"
                      image={`/images/${item.photo_file_name}`}
                      alt="comment photo thumbnail"
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1">
                        {item.comment}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 0.5, display: "block" }}
                      >
                        {new Date(item.date_time).toLocaleString()}
                      </Typography>
                    </Box>
                  </ListItemButton>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default UserComments;
