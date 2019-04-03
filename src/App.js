import React, { Component } from "react";
import "./App.css";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

class App extends Component {
  render() {
    const comments = [
      "Great blog post!",
      "Informative. Thanks",
      "Looks great",
      "Great comment that is an example to test if the page works well"
    ];
    const date = JSON.stringify(faker.date.past());
    return (
      <div className="App">
        {comments.map((content, index) => {
          return (
            <ApprovalCard key={`comment${index}`}>
              <CommentDetail
                avatarURL={faker.image.avatar()}
                userName={faker.name.firstName()}
                date={date}
                content={content}
              />
            </ApprovalCard>
          );
        })}
      </div>
    );
  }
}

export default App;
