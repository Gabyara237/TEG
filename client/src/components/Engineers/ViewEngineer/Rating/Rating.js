import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export function BasicRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Box>
  );
}
