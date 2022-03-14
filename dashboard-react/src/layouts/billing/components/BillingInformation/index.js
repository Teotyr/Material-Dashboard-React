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
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  return [
    users.map((user) => [
      <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Billing Information
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <Bill
              name={user.firstName + " " + user.lastName}
              email={user.email}
              company={user.phone}
              vat="FRB1235476"
            />
          </MDBox>
        </MDBox>
      </Card>,
    ]),
  ];
}

export default BillingInformation;
