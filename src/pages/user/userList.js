import { useState } from "react";
import {
  Button,
  Col,
  FlexboxGrid,
  Footer,
  Input,
  InputGroup,
  List,
  Panel,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useDataContext } from "@/components/context";

const styles = {
  width: 300,
  marginBottom: 10,
};

const DashboardLists = () => {
  const [strSearch, setStrSearch] = useState("");
  const { data, dataAction } = useDataContext();

  const handleSort = () => {
    try {
      dataAction.setData([...data].sort((a, b) => a.order - b.order));
    } catch (e) {
      console.log(e);
    }
  };


  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setStrSearch(lowerCase);
  };

  const filteredData = data.filter((el) => {
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
      <Panel header="Registered Users" bordered>
        <List size="sm" input={strSearch}>
          {filteredData.map((item, index) => (
            <List.Item key={index} index={index}>
              {item.firstName + " " + item.lastName}
            </List.Item>
          ))}
        </List>
      </Panel>
            
      <FlexboxGrid justify="center">
      <InputGroup style={styles} onChange={inputHandler}>
        <Input placeholder="put name or lastname" />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      </FlexboxGrid>
      
      <FlexboxGrid justify="center">
        <Button appearance="primary" type="submit" onClick={handleSort}>
          Sort
        </Button>
      </FlexboxGrid>
    </>
  );
};

export default DashboardLists;
