import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box
        component="main"
        bgcolor="primary.main"
        height="100vh"
        color="primary.contrastText"
        p={3}
      >
        <article>
          <h1>NEWS FLASH: NO ONE READS THE NEWS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sequi, impedit at aliquid possimus assumenda nihil omnis
            consequuntur doloremque unde accusamus officiis magnam laboriosam
            odit velit. Iure ipsam excepturi repudiandae.
          </p>
        </article>
      </Box>
      <Box
        component="footer"
        bgcolor="secondary.main"
        height="20vh"
        color="secondary.contrastText"
      ></Box>
    </div>
  );
}
