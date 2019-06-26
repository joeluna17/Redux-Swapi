import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { getData } from "../actions";
// import actions

class CharacterListView extends React.Component {
 
  componentDidMount() {
    // call our action
    this.props.getData()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      console.log("WE ARE FETCHING")
    }
    console.log(this.props)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state.charsReducer)
    return {
      characters: state.charsReducer.characters,
      isFetching: state.charsReducer.isFetching
    }
}

export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
