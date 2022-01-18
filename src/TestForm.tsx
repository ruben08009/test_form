import { Button, Paper, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { InputText } from "./components/InputText";
import { InputMultiCheckbox } from "./components/InputMultiCheckbox";
import { InputDropdown } from "./components/InputDropdown";
import { InputDate } from "./components/InputDate";
import { InputSlider } from "./components/InputSlider";
import { InputRadio } from "./components/InputRadio";
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';



interface IInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
export const TestForm = () => {
  const methods = useForm<IInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "30px",
        margin: "20px 300px",
        backgroundColor: "#e0ecff"
      }}
    >
      <Typography variant="h6"> Formulario de Registro</Typography>

      <InputText name="textValue" control={control} label="Nombre y Apellido" />
      <InputRadio
        name={"radioValue"}
        control={control}
        label={"Sexo"}
      />
      <InputDropdown
        name="dropdownValue"
        control={control}
        label="Localidad"
      />
      <InputDate name="dateValue" control={control} label="Fecha de Nacimiento" />
      <InputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Estudios"}
      />
      <InputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        label={"Edad"}
      />

      <Button  style = {{backgroundColor: "#91cfa0"}} onClick={handleSubmit(onSubmit)} variant={"contained"} endIcon={<ForwardToInboxSharpIcon/> }> 
      
        {" "}
        Enviar{" "}
      </Button>
      <Button style = {{backgroundColor: "#eb9375"}} onClick={() => reset()} variant={"outlined"} endIcon={<BackspaceSharpIcon/> }> 
      
        {" "}
        Reiniciar{" "}
      </Button>
    </Paper>
  );
};
