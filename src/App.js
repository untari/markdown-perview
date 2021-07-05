import React, {Component} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Card from './components/Card';
import './App.css';

const initialMd = `# Greetings Earthlings! 
## Welcome to my markdown previewer
[freeCodeCamp](https://www.freecodecamp.org/)
Front End Libraries Projects
- Random Quote Machine
- Markdown Previewer
- Drum Machine
- Javascript Calculator
- Pomodoro Clock
this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~
Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9
> example of blockquote
Inline \`code\`
\`\`\`
// code block
function sum (x, y) {
  return x + y;
}
\`\`\`
![Random Animals](https://loremflickr.com/320/240)
`;
class App extends Component {
  state = { markdownValue: initialMd};
  handleChange = e => {
    this.setState({
      markdownValue: e.target.value
    });
  };
  render() {
    const {markdownValue} = this.state;
    return (
      <div className="App">
        <div className="App-title">
          &mdash;Markdown Previewer&mdash;
        </div>
        <main>
          <Card title="Editor">
            <Editor 
              onChange={this.handleChange}
              markdownValue={markdownValue}
            />
          </Card>
          <Card title="Preview">
            <Preview markdownValue={markdownValue} />
          </Card>
        </main>
      </div>
    );
  };
}

export default App;
