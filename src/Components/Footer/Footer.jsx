import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Footer() {
  const date = new Date();

  return (
    <footer className="Footer  animate__animated animate__rollIn">
      <Typography
        sx={{
          textAlign: "center",
          verticalAlign: "middle",
          mt:2
        }}
      >
        {" "}
        <CopyrightIcon
          sx={{
            textAlign: "center",
            m: 0,
            p: 0,
            fontSize: 15,
            verticalAlign: "middle",
          }}
        />{" "}
        {`${date.getFullYear()} - Realizado con `}
        <FavoriteBorderIcon
          sx={{
            textAlign: "center",
            m: 0,
            p: 0,
            fontSize: 15,
            verticalAlign: "middle",
            color:"red"
          }}
        />
        {` - Vidrio Team`}
      </Typography>
    </footer>
  );
}

export default Footer;
