import { Box, Button } from "@mui/material";
import { navItems } from "../../Helpers/headers";

export default function NavList(){
    return(
        <Box sx={{display: { xs: 'none', md: 'flex' } }} className="navBar">
            {navItems.map((page, index) => (
              <Button
                component={"a"}
                key={index}
                href={`${page.ref}`}
                sx={{ m: 2, color: 'white', textDecoration:"none" }}
                className="navBar"
                startIcon={page.icon}
              >
                {page.label}
              </Button>
            ))}
          </Box> 
    );
}