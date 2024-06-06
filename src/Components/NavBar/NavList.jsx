import { Box } from "@mui/material";
import { navItems } from "../../Helpers/headers";

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
export default function NavList(){
    return(
        <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((page, index) => (
              <Box
                component={"a"}
                key={index}
                onClick={()=>scrollToSection(page.ref)}
                sx={{ m: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Box>
            ))}
          </Box> 
    );
}