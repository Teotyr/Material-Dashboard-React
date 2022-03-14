/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoJira from "assets/images/small-logos/logo-jira.svg";

import { useState, useEffect } from "react";

export default function data() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/stories")
      .then((res) => res.json())
      .then((stories) => setStories(stories));
  }, []);

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "budget", accessor: "budget", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: stories.map((store) => {
      return {
        companies: <Company image={logoJira} name={store.name} />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {store.sales}
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={store.completion} color="info" variant="gradient" label={true} />
          </MDBox>
        ),
      };
    }),
  };
}
