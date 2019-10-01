import React from 'react';

import Hero from './components/hero/hero';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
    // Reference to the search component
    this.searchRef = React.createRef();
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchQuery: this.searchRef.current.value
    }, () => {
      this.props.history.push(`/search?q=${encodeURIComponent(this.state.searchQuery)}`);
    });
  }

  render() {
    return (
      <Hero 
          searchRef={this.searchRef} 
          searchOnSubmit={this.handleSearch} />
    );
  }
}

export default App;
