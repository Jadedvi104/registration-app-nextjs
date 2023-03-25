import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Navbar,
  Nav,
  FlexboxGrid,
  List,
} from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import DashboardForm from "./form";
import DashboardLists from "./list";

const Dashboard = () => {

  const [data, useData] = useState([
      "Leon Kennedy",
      "Ada Wong",
      "Ashley Graham",
      "Ethan Winters",
  ]);

  return (
    <>
        <Container>
          {/* <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand>
              </Navbar.Brand>
                <Nav>
                <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                <Nav.Item>News</Nav.Item>
                <Nav.Item>Products</Nav.Item>
                <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Item>Contact</Nav.Item>
                </Nav.Menu>
              </Nav>
              <Nav pullRight>
                <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
              </Nav>
            </Navbar>
          </Header> */}
          <Content>
            <FlexboxGrid justify="center">
              <DashboardForm  
              data={data}
              useData={useData} 
              />
            </FlexboxGrid>
          </Content>
          <Footer>
            <DashboardLists
            data={data}
            useData={useData}
            />
          </Footer>
        </Container>
    </>
  );
};

export default Dashboard;