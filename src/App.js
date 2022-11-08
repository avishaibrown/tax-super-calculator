import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MAIN_TITLE, SUBMIT, CLEAR, SUPER_RATE } from "./utils/constants";
import { calculateTax, calculateSuper } from "./utils/util";

const App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    department: "",
    jobTitle: "",
    grossSalary: "",
  });

  const [tax, setTax] = useState(0);
  const [superContribution, setSuperContribution] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
  const employeeId = Math.floor(Math.random() * 1000000);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "grossSalary") {
      setTax(calculateTax(value));
      setSuperContribution(calculateSuper(value, SUPER_RATE));
      setNetSalary(value - calculateTax(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to server
    setFormValues({
      ...formValues,
      employeeId: employeeId,
      tax: tax,
      superContribution: superContribution,
      netSalary: netSalary,
    });
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      dob: "",
      email: "",
      phone: "",
      department: "",
      jobTitle: "",
      grossSalary: "",
    });
    setTax(0);
    setSuperContribution(0);
    setNetSalary(0);
  };

  return (
    <Container>
      <Grid container justifyContent="center" p={3} display="block">
        <Typography variant="h4" gutterBottom>
          {MAIN_TITLE}
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: "60%" }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Personal Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={8}>
                  <TextField
                    id="name"
                    label="Name"
                    name="name"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.dob}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="phone"
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Employment Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={8}>
                  <TextField
                    id="employeeId"
                    label="Employee ID"
                    name="employeeId"
                    fullWidth
                    variant="outlined"
                    value={employeeId}
                    disabled
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="department"
                    label="Department"
                    name="department"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.department}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="jobTitle"
                    label="Job Title"
                    name="jobTitle"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.jobTitle}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Payroll Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={8}>
                  <TextField
                    id="grossSalary"
                    label="Gross Salary"
                    name="grossSalary"
                    required
                    fullWidth
                    variant="outlined"
                    value={formValues.grossSalary}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="tax"
                    label="Annual Tax"
                    name="tax"
                    fullWidth
                    variant="outlined"
                    value={tax}
                    disabled
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="superContribution"
                    label="Annual Super Contribution"
                    name="superContribution"
                    fullWidth
                    variant="outlined"
                    value={superContribution}
                    disabled
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="netSalary"
                    label="Net Salary"
                    name="netSalary"
                    fullWidth
                    variant="outlined"
                    value={netSalary}
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <Stack direction="row" spacing={2} padding={3}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            {SUBMIT}
          </Button>
          <Button variant="contained" size="large" onClick={handleClear}>
            {CLEAR}
          </Button>
        </Stack>
      </Grid>
    </Container>
  );
};

export default App;
