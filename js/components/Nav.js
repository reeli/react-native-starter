import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  title: {
    padding: 20,
    color: 'green',
  },
};

class Nav extends Component {
  render() {
    const { title } = this.props;

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

Nav.propTypes = {
  title: PropTypes.string,
};

export default Nav;
