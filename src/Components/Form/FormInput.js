import { Input, FormFeedback } from 'reactstrap';
import Formsy from 'formsy-react-2';
import React from 'react';

export class FormInput extends Formsy.Mixin {

    /**
     * Constructor method
     *
     */
    constructor(...params) {
        super(...params);

        // Sets the stats of the input
        this.state = { _value: '' }
    }

    /**
     * Sets the defaul props
     *
     */
    static defaultProps = {
        type: 'text'
    }

    /**
     * Updates the input value
     *
     */
    updateValue = (event) => {
        this.setValue(event.target.value);
    }

    /**
     * Render the Input
     * 
     */
    render() {

        // Get the Formsy props
        const {type, ...rest} = this.removeFormsyProps(this.props);

        // Get the message errors
        const errorMessage = this.getErrorMessage();
        
        // Return the view
        return (
            <div>
                <Input  {...rest} 
                        type={type} 
                        value={type == 'checkbox' ? 'S' : this.getValue()}
                        invalid={errorMessage ? true : false}
                        onChange={this.updateValue} />
                <FormFeedback invalid>{errorMessage}</FormFeedback>
            </div>
        );
    }
}

// End of file
