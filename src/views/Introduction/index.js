import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Page from "src/components/Page";
import Hero from "./Hero";
import Services from "./Services";

function Introduction() {
  return (
    <Page title="Introduction - Mahmud">
      <Container>
        <Hero />
        <Services />
      </Container>
    </Page>
  );
}
export default Introduction;
