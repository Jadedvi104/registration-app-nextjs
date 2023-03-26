import { useDataContext } from "@/components/context";
import React, { useContext, useState } from "react";
import { Container, Content, Footer, FlexboxGrid } from "rsuite";
import DashboardForm from "./userForm";
import DashboardLists from "./userList";

export default function Dashboard() {
  //to avoid "Octal literals convert telNumber to string

  return (
    <>
      <Container>
        <Content>
          <DashboardForm/>
          <DashboardLists />
        </Content>
      </Container>
    </>
  );
}
