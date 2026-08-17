import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import "./Editor.css";

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello world</p>",
  });

  if (!editor) return null;

  const handleSubmit = () => {
    const html = editor.getHTML(); // "<p><strong>Hello</strong></p>"
    const text = editor.getText(); // "Hello" — plain text, no tags
    const json = editor.getJSON(); // structured JSON format

    console.log(html); // check what you're getting
  };

  return (
    <div className="editor-container">
      <Menubar editor={editor} />
      <EditorContent className="edit-space" editor={editor} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Editor;
