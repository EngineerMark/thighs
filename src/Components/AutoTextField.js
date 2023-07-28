import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

function AutoTextField(props) {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <Autocomplete
                options={props.options || []}
                noOptionsText="No options"
                getOptionLabel={(option) =>
                    option.label || ""
                }
                onInputChange={(event, value) =>
                    setInputValue(value)
                }
                onChange={(event, value) =>
                    props.onChange?.(event, value)
                }
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label={props.label || ""}
                        onKeyDown={(e) => {
                            if (
                                e.key === "Enter" &&
                                props.options.findIndex((o) => o === inputValue) === -1
                            ) {
                                props.setOptions((o) => o.concat(inputValue));
                            }
                        }}
                    />}
            />
        </>
    );
}

export default AutoTextField;