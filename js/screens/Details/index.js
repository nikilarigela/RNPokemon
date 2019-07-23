import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Appbar, Title } from "react-native-paper";

export default class App extends Component {
  state = { data: {}, isFetching: true, error: [], next: null };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { url } = this.props.navigation.state.params;
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(data =>
          this.setState({
            data,
            isFetching: false
          })
        )
        .catch(err => this.setState({ isFetching: false, error: [err] }));
    } else {
      this.setState({ isFetching: false, error: [err] });
    }
  };

  render() {
    const { data } = this.state;
    const { name } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Appbar.Header dark>
          <Appbar.Content title={name} />
        </Appbar.Header>
        <ScrollView style={{ flex: 1 }}>
          {Object.keys(data).map(key => (
            <View style={{ paddingHorizontal: 16 }} key={key}>
              <Title>
                {key
                  .replace("_", " ")
                  .replace(/(^[a-z])|(\s+[a-z])/g, txt => txt.toUpperCase())}
              </Title>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
