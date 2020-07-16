import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
} from "carbon-components-react/lib/components/UIShell";
const IMHeader = () => (
  <Header aria-label="involveMe Header">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBMernauts">
      involveMe
    </HeaderName>
    <HeaderNavigation aria-label="involveMe">
      <HeaderMenuItem element={Link} to="/infos">
        More Info
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);
export default IMHeader;
