import { data } from "autoprefixer";
import { forwardRef, useRef, useState } from "react";
import {
  Form,
  ButtonToolbar,
  Button,
  Input,
  Schema,
  FlexboxGrid,
} from "rsuite";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  firstName: StringType().isRequired("This field is required."),
  lastName: StringType().isRequired("This field is required."),
  telNumber: NumberType("Please enter a valid number.")
    .range(0, 9_999_999_999, "Please enter real tel number")
    .isRequired()
    .isInteger(),
});

const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const DashboardForm = ({data, useData}) => {

  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    telNumber: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
    let newElm = formValue.firstName + " " + formValue.lastName;
    //prevent duplicate value
    if(!data.includes(newElm)) {
      useData(prevStates => [...prevStates, newElm]);
    }
  };

  return (
    <>
      <Form
        ref={formRef}
        model={model}
        onChange={setFormValue}
        onCheck={setFormError}
        formValue={formValue}
      >
        <TextField name="firstName" label="First Name" />
        <TextField name="lastName" label="Last Name" />
        <TextField name="telNumber" label="Tel Number" />
        <FlexboxGrid justify="center">
          <Button appearance="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </FlexboxGrid>
      </Form>
    </>
  );
};

export default DashboardForm;
