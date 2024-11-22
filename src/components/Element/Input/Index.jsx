import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(
    (props, ref) => {
        const {judulLabel, tipeInput, placeholderInput, name} = props;
        return(
            <div className="mb-6">
                <Label htmlFor={name}>{judulLabel}</Label>
                <Input type={tipeInput} placeholder={placeholderInput} name={name} ref={ref}/>
            </div>
        )
    }
    
);
export default InputForm;