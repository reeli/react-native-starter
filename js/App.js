import React, { Component, PropTypes } from 'react';
import { Text, TextInput, View, ListView, Image, StyleSheet } from 'react-native';
import { fetchMovieListAction } from './actions/movieListAction';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 65,
    height: 100,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  view: {
    flex: 1,
    flexDirection: 'column',
  },
});

class App extends Component {
  componentDidMount() {
    this.props.fetchAction();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text> Loading movies...</Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: movie.images.medium }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text>{movie.title}</Text>
          <Text>{movie.directors[0].name}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    const { loaded, movieList } = this.props;

    if (!loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.view}>
        <TextInput
          placeholder="搜索电影"
          style={styles.textInput}
          onEndEditing={(evt) => alert(evt.nativeEvent.text)}
        />
        <ListView
          dataSource={ds.cloneWithRows(movieList)}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      </View>
    );
  }
}

function select(state) {
  return {
    movieList: state.movieList,
    loaded: state.loaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAction: () => dispatch(fetchMovieListAction()),
  };
}

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  movieList: PropTypes.array.isRequired,
  fetchAction: PropTypes.func.isRequired,
};

export default connect(select, mapDispatchToProps)(App);
