import React, { Component } from "react";
import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { Appbar, Card, Title } from "react-native-paper";

const { width } = Dimensions.get("screen");

export default class App extends Component {
  state = { data: [], isFetching: true, error: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { next } = this.state;
    const url = next || "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: [...this.state.data, ...data.results],
          isFetching: false
        })
      )
      .catch(err => this.setState({ isFetching: false, error: [err] }));
  };

  onSearch = () => {
    console.log("search pressed");
  };

  render() {
    const { data, isFetching, error } = this.state;
    if (error.length !== 0) {
      alert("something went wrong");
    }
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Appbar.Header dark>
          <Appbar.Content title="Pokemon" />
          <Appbar.Action icon="search" onPress={this.onSearch} />
          <Appbar.Action
            icon="favorite"
            onPress={() => this.props.navigation.navigate("Favorite")}
          />
        </Appbar.Header>

        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }) => (
              <Card
                style={{ width: (width - 16) / 2, padding: 16 }}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    url: item.url,
                    name: item.name.replace(/(^[a-z])|(\s+[a-z])/g, txt =>
                      txt.toUpperCase()
                    )
                  })
                }
              >
                <Card.Cover
                  style={{ width: 150, height: 150 }}
                  source={require("../../../assets/pokeball.png")}
                />
                <Card.Content>
                  <Title>
                    {item.name.replace(/(^[a-z])|(\s+[a-z])/g, txt =>
                      txt.toUpperCase()
                    )}
                  </Title>
                </Card.Content>
              </Card>
            )}
            keyExtractor={item => item.name}
            onEndReached={this.fetchData}
          />
        )}
      </View>
    );
  }
}
