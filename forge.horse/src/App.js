import './App.css';
import Canvas from './Canvas';
import React from 'react';
import Editor from "@monaco-editor/react";
import placeHolderComic from './placeHolderComic';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {comic: placeHolderComic};
    };

    updateComic = (value) => {
      try {
        const newcc = JSON.parse(value)
        this.setState(pp => ({
          comic: {...this.state.comic, ...newcc}
        }));
      } catch (e) {
        // e
      }
    }

    handleEditorDidMount = (editor, monaco) => {
      // here is the editor instance
      window.eee = editor;
      editor.setValue(JSON.stringify(this.state.comic, null, '\t'));
      editor.updateOptions({wordWrap: "on", minimap: { enabled: false }});
    }

    render(){
      return (
        <div className="app">
          <div className="canvas">
           <Canvas comic={this.state.comic} src="./assets/full_square.png" transform={this.state.comic.transforms[0]}/>
           <Canvas comic={this.state.comic} src="./assets/panel_01_square.png" transform={this.state.comic.transforms[1]} panels={[this.state.comic.data.panels[0]]}/>
           <Canvas comic={this.state.comic} src="./assets/panel_02_square.png" transform={this.state.comic.transforms[2]} panels={[this.state.comic.data.panels[1]]}/>
          </div>
          <div className="workspace">
            <Editor onChange={(e) => this.updateComic(e)}
             height="90vh"
             defaultLanguage="json"
             theme="vs-dark"
             wordWrap="on"
             onMount={this.handleEditorDidMount}
             ></Editor>
          </div>
        </div>
      );
    }
}

export default App;
