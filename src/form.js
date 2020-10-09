import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <br />
                <label htmlFor="job">Job{"\u00A0\u00A0\u00A0\u00A0"}</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <br />

                <input
                    type="button"
                    name="add"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;