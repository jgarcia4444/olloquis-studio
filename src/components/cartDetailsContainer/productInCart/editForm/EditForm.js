import './EditForm.css';
import React from 'react';

const EditForm = (props) => {

    const renderSelectOptions = () => {
        const quantityRange = [...Array(21).keys()];
        return (
            <select onChange={props.updateProductQuantity} className="form-control" name="quantity-edit-select" value={props.item.quantity}>
                {quantityRange.map((quantity, i) => {
                    return (
                        <option key={i} value={quantity}>{quantity}</option>
                    )
                })}
            </select>
        )
    }

    return (
        <div className="container edit-form-container">
            <div className="row">
                <div className="col-12 form-group">
                    {renderSelectOptions()}
                </div>
            </div>
        </div>
    )
}

export default EditForm;