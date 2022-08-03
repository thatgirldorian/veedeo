import React from 'react';


class SearchBar extends React.Component {
    //initialize state 
    state = {term: ''}

    //add event handler for the search bar when inout changes and when the form is submitted 
    onInputChange = event => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = event => {
        //prevent automatic form submission
        event.preventDefault()

        //call the props when the form is submitted
        this.props.onFormSubmit(this.state.term)
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"> 
                        <label>Find something to watch</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div> 
                </form>
            </div> 
        )
    }
}

export default SearchBar