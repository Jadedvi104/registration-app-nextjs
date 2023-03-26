import { Container, FlexboxGrid, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const AdminTable = ({ filteredData }) => {
  return (
    <>
        <Table
          height={250}
          width={360}
          data={filteredData}
          cellBordered={true}
          autoHeight={"auto"}
          headerHeight={40}
          class="container mx-auto"
        >
          <Column width={60} align="center" fixed>
            <HeaderCell>No</HeaderCell>
            <Cell dataKey="order" />
          </Column>

          <Column width={100}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Tel Number</HeaderCell>
            <Cell dataKey="telNumber" />
          </Column>
        </Table>
    </>
  );
};

export default AdminTable;
