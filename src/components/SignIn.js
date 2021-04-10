import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { roomrRef } from "../firebase";

const filter = createFilterOptions();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © hiroyuki"}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName, setRoom }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [inpuName, setInputName] = useState("");
  const [inputRoom, setInputRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isNewRoom, setIsNewRoom] = useState(false);
  const [value, setValue] = React.useState(null);

  // ルームの新規作成
  const hundleSubmit = async () => {
    if (isNewRoom) {
      const id = roomrRef.doc().id;
      roomrRef
        .add({
          name: inputRoom,
          id,
        })
        .then(() => {
          setName(inpuName);
          setRoom(inputRoom);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  useEffect(() => {
    const getRooms = [];
    const fetchData = async () => {
      roomrRef.get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          getRooms.push(doc.data());
        });
        setRooms(getRooms);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisabled(inpuName === "" || inputRoom === "");
  }, [inpuName, inputRoom]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        {String(isNewRoom)}
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            hundleSubmit();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setInputName(e.target.value)}
          />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  name: newValue,
                });
                setInputRoom(newValue);
                setIsNewRoom(true);
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  name: newValue.inputValue,
                });
                setInputRoom(newValue);
                setIsNewRoom(true);
              } else {
                setValue(newValue);
                setInputRoom(newValue.name);
                setIsNewRoom(false);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              // Suggest the creation of a new value
              if (params.inputValue !== "") {
                filtered.push({
                  inputValue: params.inputValue,
                  name: `Add "${params.inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={rooms}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.name;
            }}
            renderOption={(option) => option.name}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="ルーム名" variant="outlined" />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabled}
            className={classes.submit}
          >
            始める
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
