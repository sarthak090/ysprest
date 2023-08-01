import dynamic from 'next/dynamic';
import { useState } from 'react';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default function Tiptap({ value, onChange, ...rest }: any) {
  const onTextEditorChange = (text: string) => {
    onChange(text);
  };

  const editorHeight = 200; // Set the desired height here

  const editorStyle = {
    height: `${editorHeight}px`,
    margin: '20px 0',
    background: 'white',
    color: 'black',
  };
  return (
    <QuillNoSSRWrapper
      modules={modules}
      value={value}
      onChange={onTextEditorChange}
      formats={formats}
      theme="snow"
      style={editorStyle}
    />
  );
}
