import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor: React.FC<{
  hidePlugins?: boolean;
  hideToolbar?: boolean;
  onChange: Function;
  initial: string;
  height?: string;
  readOnly?: boolean;
}> = (props) => {
  var plugins =
    props.hidePlugins === true
      ? ""
      : "print preview fullpage searchreplace autolink directionality visualblocks \
                visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking \
                anchor toc insertdatetime advlist lists textcolor wordcount imagetools \
                contextmenu colorpicker textpattern";

  var toolbar1 =
    props.hideToolbar == false
      ? ""
      : "sizeselect | fontselect | fontsizeselect | bold italic strikethrough forecolor backcolor | alignleft aligncenter alignright  \
                | numlist bullist outdent indent";
  return (
    <Editor
      apiKey="z575wana8isszbqidxprdk233mmp4cra8rapgzfak98yy1u9"
      initialValue={props.initial}
      init={{
        height: props.height == null ? "50vh" : props.height,
        width: "100%",
        plugins: plugins,
        toolbar1: toolbar1,
        content_style: "body {font-size: 11;}",
        fontsize_formats:
          "8pt 9pt 10pt 10.5pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
      }}
      onEditorChange={(e: any) => props.onChange(e.target.getContent())}
      disabled={props.readOnly}
    />
  );
};

export default TextEditor;

// modals and links !!!!!
