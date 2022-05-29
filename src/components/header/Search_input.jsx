import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import axios from "axios";
export default function Grouped(props) {
  const options = props.city.map((option) => {
    const firstLetter = option.THANH_PHO[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const styles = (theme) => ({
    popper: {
      width: "100%",
    },
  });
  const PopperMy = function (props) {
    return <Popper {...props} style={styles.popper} placement="bottom-start" />;
  };
  return (
    <Autocomplete
      id="grouped-demo"
      fullWidth={true}
      PopperComponent={PopperMy}
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      onChange={(event, value) =>{if(value.TINH==null){
           props.childToParent({id:value.ID_DIA_DIEM,namediadiem: value.THANH_PHO + " " + value.NUOC})
      }else{
           props.childToParent({id:value.ID_DIA_DIEM,namediadiem:value.THANH_PHO + " " + value.TINH + " " + value.NUOC})
          
      }}}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => {
        if (option.TINH == null) {
          return option.THANH_PHO + " " + option.NUOC;
        } else {
          return option.THANH_PHO + " " + option.TINH + " " + option.NUOC;
        }
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="standard"/>
      )}
    />
  );
}
