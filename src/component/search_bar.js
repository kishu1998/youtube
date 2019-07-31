import React ,{Component} from 'react';
class SearchBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={term:''}
    }
    handle(e)
    {
       
        this.props.onSearchTermChange(e.target.value);
        this.setState({term:e.target.value});
    }
    render()
    {
        return <div className='search-bar' ><input onChange={event=>this.handle(event)}/></div>

    }
}
export default SearchBar;