import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Hero from "./Hero";
import Page from "src/components/Page";

function Introduction() {
  return (
    <Page title="Introduction - Mahmud">
      <Container>
        <Hero />
      </Container>
    </Page>
  );
}
export default Introduction;
