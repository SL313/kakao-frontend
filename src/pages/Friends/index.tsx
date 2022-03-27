import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Container,
  Avatar,
  Box,
  TextField,
  Grid,
  IconButton,
  Modal,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import FriendAdd from "./components/FriendAdd";
import { friends } from "./data";
import { Phone } from "@mui/icons-material";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

const Friends = (): JSX.Element => {
  //   const [friends, setFriends] = useState<FriendType[]>([]);
  //   const readFriends = async () => {
  //     const { data } = await axios.get<FriendType[]>("http://localhost:5000");
  //     setFriends(data);
  //   };
  //   useEffect(() => {
  //     readFriends();
  //   }, []);

  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendValue, setFriendValue] = useState<string>("");
  const [friendList, setFriendList] = useState(friends);
  const [open, setOpen] = useState(false);

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(friends);
    } else {
      const filteredFriends = friends.filter((friend) =>
        friend.name.includes(inputText)
      );
      setFriendList(filteredFriends);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // const save = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFriendValue(event.currentTarget.value);
  // };

  // const find = () => {
  //   setFriendList(
  //     friendList.filter((friendValue) => {
  //       //friendList.indexOf();
  //     })
  //   );
  // };

  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friends/1"
    );
    setOriginalFriends(data);
    setFriendList(data);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <>
      <Container>
        <Modal open={open} onClose={closeModal}>
          <FriendAdd />
        </Modal>
        <Box>
          <Grid container>
            <Grid item xs={10.5}>
              <TextField
                label="친구 검색"
                variant="outlined"
                fullWidth
                margin="dense"
                onChange={changeSearchText}
              />
            </Grid>
            <Grid item xs={1.5}>
              <Box sx={{ p: "8px" }}>
                <IconButton color="primary" size="large" onClick={openModal}>
                  <PersonAddIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <List>
          {friendList.map((friend) => {
            return (
              <ListItemButton key={friend.id}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={friend.name}
                  secondary={friend.statusMessage}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default Friends;
