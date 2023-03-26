import React, { useContext, useState } from "react";
import { Container, Content } from "rsuite";
import AdminDashboardList from "./adminDbList";

export default function AdminDashboard() {
  return (
    <>
      <Container>
        <Content>
          <AdminDashboardList />
        </Content>
      </Container>
    </>
  );
}
