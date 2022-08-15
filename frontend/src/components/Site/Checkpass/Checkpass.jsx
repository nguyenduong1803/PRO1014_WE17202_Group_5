import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import ToastMess from "../ToastMess/ToastMess";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { api } from "../../../utils/api";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const { token, id } = useParams();
  const history = useHistory();

  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isShowToast, setIsShowToast] = useState(false);
  const [mess, setMess] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPass === "" || confirmNewPass == "") {
      setIsShowToast(true);
      setMess("Vui lòng điền đẩy đủ trường!");
      return;
    }
    if (newPass !== confirmNewPass) {
      setIsShowToast(true);
      setMess("Mật khẩu mới phải trùng với xác nhận mật khẩu mới!");
      return;
    }
    const body = {
      id,
      token,
      mat_khau: newPass,
      mat_khau_confirmation: confirmNewPass,
    };
    try {
      const res = await axios.post(api + "user/resetPassword", body);
      setMess("Đổi mật khẩu thành công, vui lòng đăng nhập lại");
      setNewPass("");
      setConfirmNewPass("");
      setTimeout(() => {
        history.push("/dang-nhap");
      }, 1000);
    } catch (err) {
      setMess("Đổi mật khẩu thất bại, vui lòng thử lại sau!");
      setNewPass("");
      setConfirmNewPass("");
    }
    setIsShowToast(true);
  };

  return (
    <ThemeProvider theme={theme} className="main">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ĐẶT LẠI MẬT KHẨU
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nhập mật khẩu mới"
              name="password1"
              id="password1"
              autoFocus
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Xác nhận mật khẩu mới"
              type="password2"
              id="password2"
              autoComplete="current-password"
              value={confirmNewPass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ĐẶT LẠI
            </Button>
          </Box>
        </Box>
        <ToastMess
          notify={mess}
          setState={setIsShowToast}
          state={isShowToast}
        />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
