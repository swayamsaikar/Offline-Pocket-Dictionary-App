import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SpeakerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Dictionary from "./localDB";
import Header from "./components/Header";
import Speech from "expo-speech";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      word: "",
      wordType: "",
      description: "",
      isSearchPressed: "",
    };
  }

  getWord = (word) => {
    var text = word.toLowerCase().trim();
    try {
      this.setState({
        word: Dictionary[text].word,
        wordType: Dictionary[text].lexicalCategory,
        description: Dictionary[text].definition,
      });
    } catch (err) {
      alert(`The Word ${text} does not exist in our database for now`);
      this.setState({
        text: "",
        word: "No data Found",
        wordType: "No data Found",
        description: "No data Found",
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          <TextInput
            style={styles.inputBox}
            value={this.state.text}
            onChangeText={(text) => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: "Loading...",
                description: "Loading...",
                wordType: "Loading...",
              });
            }}
          />
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => {
              if (this.state.text === "") {
                alert(
                  "Please Write and word which you want to know the meaning for"
                );
              } else {
                this.getWord(this.state.text);
              }
            }}
          >
            <Icon name="search" size={26} color="#456026" />
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 15, marginTop: 50 }}>
          <View style={styles.flexTitle}>
            <Text style={styles.highlightedText}>Word: </Text>
            <Text style={{ fontSize: 15 }}>{this.state.word}</Text>
          </View>

          <View style={styles.flexTitle}>
            <Text style={styles.highlightedText}>lexicalCategory: </Text>
            <Text style={{ fontSize: 15 }}>{this.state.wordType}</Text>
          </View>

          <View style={[styles.flexTitle]}>
            <Text style={styles.highlightedText}>Definition: </Text>
            <Text style={{ fontSize: 15 }}>{this.state.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: "70%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#4567",
  },
  flexTitle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    flexWrap: "wrap",
  },
  highlightedText: {
    fontSize: 16,
    color: "#232456",
  },
  SpeakButton: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    margin: 10,
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 50,
  },
});
