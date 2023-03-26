import { useState } from "react";
import {
  Button,
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Header,
  Input,
  InputGroup,
  Table,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import AdminTable from "./adminTable";
import { useDataContext } from "@/components/context";

const { Column, HeaderCell, Cell } = Table;

// Must move to tailwind
const styles = {
  width: 300,
  marginBottom: 10,
  marginTop: 10,
};

const AdminDashboardList = () => {
  const { data: initData, dataAction } = useDataContext();

  const [strSearch, setStrSearch] = useState("");
  const [inputVal, setInputVal] = useState(null);

  const handleSort = () => {
    try {
      dataAction.setData([...initData].sort((a, b) => a.order - b.order));
    } catch (e) {
      console.log(e);
    }
  };

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setStrSearch(lowerCase);
  };

  const handleSetAmount = (e) => {
    if (inputVal > 0) dataAction.setAmount(inputVal);
  };

  const handleValue = (e) => {
    setInputVal(e.target.value);
  };

  const filteredData = initData.filter((el) => {
    try {
      //if no input the return the original
      if (strSearch === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        const totalName = el.firstName + " " + el.lastName;
        return (
          el.firstName.toLowerCase().includes(strSearch) ||
          el.lastName.toLowerCase().includes(strSearch) ||
          totalName.toLowerCase().includes(strSearch)
        );
      }
    } catch (e) {
      console.log(e, "filteredData Error");
    }
  });

  return (
    <>
      <Container calss="container mx-auto">
        <AdminTable filteredData={filteredData} />
        <Content>
          <FlexboxGrid justify="center">
            <Button appearance="primary" type="submit" onClick={handleSort}>
              Sort
            </Button>
          </FlexboxGrid>
        </Content>
        <Divider></Divider>
        <FlexboxGrid justify="center">
          <InputGroup style={styles} onChange={inputHandler}>
            <Input placeholder="Input name or lastname" />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
          <InputGroup style={styles} onChange={handleValue}>
            <Input placeholder="Input amount" type="number" />
            <InputGroup.Button type="submit" onClick={handleSetAmount}>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </FlexboxGrid>
      </Container>
    </>
  );
};

export default AdminDashboardList;
