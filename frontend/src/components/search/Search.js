import React, { Component, Fragment } from 'react'

class Search extends Component {

    state = {
        text: ''
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchArtists(this.state.text);
        this.setState({ text: '' });    //reset the state after the search
    }

    render() {
        const { showClear, clearArtists } = this.props;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className="text-center" style={{ marginTop: '150px' }}>
                    <h1>Search an Artist</h1>
                    <div className="form-group">
                        <input type="text" name="text" value={this.state.text} placeholder="eg. kanye" onChange={this.handleInputChange} style={{width: '200px', border: '1px solid #666'}}/>
                    </div>
                    <button type="submit" value="Submit" className="btn btn-primary">Go!</button>
                </form>
                {showClear && (
                    <button className="btn btn-block" onClick={clearArtists}>Clear</button>
                )}
            </Fragment>
        )
    }
}

export default Search
