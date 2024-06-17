import { Box, Button, Divider } from "@mui/material";
import { navItems } from "../../Helpers/headers";

export default function NavListHorizontal(){
    return(
        <Box sx={{display: "flex", flexDirection:"column" }} >
            {navItems.map((page, index) => (
                <Box key={index}>
              <Button
                component={"a"}
                key={index}
                href={`${page.ref}`}
                sx={{ m: 2, color: 'black', textDecoration:"none" }}
                className="navBar"
                startIcon={page.icon}
              >
                {page.label}
              </Button>
              <Divider/>
                </Box>
            ))}
          </Box> 
    );
}