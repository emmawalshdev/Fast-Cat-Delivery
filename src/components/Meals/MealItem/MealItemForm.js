import React from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    return <div className={classes.form}>
        <Input label="Amount" className={classes.input} input={{
            id: "amount" + props.id,
            type: "text",
            step: "2",
            min: "1",
            max: "10",
            defaultValue: "2",
        }}
        />
        <button>+ Add</button>
    </div>
}

export default MealItemForm;