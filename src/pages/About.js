import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Բարր գալուստ Armenian Food ռեստերան</Typography>
        <p>
        FOOD ռեստորանն ունի հետաքրքիր և հարուստ ճաշացանկ, որտեղ դուք կարող եք զգալ համերի և հույզերի գլանափաթեթը:
         Այստեղ մենք ներկայացնում ենք Հայկական  ընտրված ամենահամեղ և յուրօրինակ ուտեստները։
        </p>
      </Box>
    </Layout>
  );
};

export default About;
