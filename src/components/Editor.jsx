import React, { useEffect } from "react";
import { useState, useRef } from "react";
import fetchFromAPI from "../summerizer";



const Editor = () => {
  const [keyword, setkeyword] = useState(3)
  const [selectedButton, setselectedButton] = useState(true);
  const inputRef = useRef();
  const [loading, setloading] = useState(false)
  const textareaRef = useRef(null)
  const [summary, setsummary] = useState([])
  const [textloading, settextloading] = useState(false)
  let textToCopy = ""

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [summary])

  const Summeries = async () => {
    setsummary(["loading..."])
    setloading(true)
    const userInput = inputRef.current.value;

    const data = await fetchFromAPI(userInput, keyword)
    setloading(false)
    setsummary([""])
    let CompleteData = data.summary
    textToCopy = CompleteData
    chatgptMessage(CompleteData)
  }

  const chatgptMessage = async (text) => {
    let splitedMessage = text.split(" ");
    settextloading(true)
    for (const element of splitedMessage) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setsummary((summary) => [...summary, element]);
          resolve();
        }, 100);
      });
    }
    settextloading(false)
  };

  const handleInputChange = (e) => {
    const targetElement = document.getElementById(e.target.value);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const copyText = async () => {
    const text = summary.join(' ');
    if (text === "loading...") {
      await navigator.clipboard.writeText("wait you fukin B atch");
    }
    else {
      await navigator.clipboard.writeText(text);
      
    }


  }




  return (
    <div className="w-full px-20 mt-5 editor" style={{ opacity: loading ? "50%" : "100%" }}>
      <div className="w-full border-2 p-5 bg-white rounded-xl editor-container">
        <div className="flex w-full items-start editor-container">
          <div className="border rounded-lg border-orange-400 overflow-hidden">
            <button
              style={{
                backgroundColor: selectedButton ? "orange" : "white",
              }}
              onClick={() => { setselectedButton(true); anotherFunction(); }}

              className="editor-button py-2 px-5 border-r border-orange-400 text-center rounded-l-lg "
            >
              Paragraph
            </button>
            <button
              style={{
                backgroundColor: selectedButton ? "white" : "orange",
              }}
              onClick={() => { setselectedButton(false), setkeyword(keyword + 1) }}
              className="editor-button py-2 px-5 border-orange-400 border-r text-center "
            >
              Keysentence:{keyword}
            </button>
            <button className="py-2 px-2 border-l " onClick={() => setkeyword(keyword - 1)}>-</button>
          </div>
        </div>
        <div className="flex w-full h-64 editor-tab">
          <div className="w-1/2  text-start px-5 h-full">
            <p className="mt-5 para ">
              <b>Your text</b> (no character limit)
            </p>
            <div className="w-full border-2 h-full mt-2  rounded-xl">
              <textarea ref={inputRef} className="w-full h-full rounded-xl overflow-wrap p-2" />
            </div>
          </div>
          <div className="w-1/2  text-start px-5">
            <div className="flex justify-between"> <p className="mt-5 font-bold para">Summary:</p>
              <button className="mr-5 " style={{ display: textloading ? "none" : "block" }} onClick={copyText}>copy text</button></div>
            <div className="w-full border-2 h-full mt-2  rounded-xl">
              <textarea readOnly defaultValue={summary.join(' ')} ref={textareaRef} className="textbox w-full h-full rounded-xl overflow-wrap p-2" />
            </div>
          </div>
        </div>
        <button className="animation border-2 p-2 mt-16 w-32 rounded-xl bg-orange-400 " style={{ visibility: textloading || loading ? "hidden" : "visible" }}
          onClick={() => Summeries()}>
          <img
            className="w-5 inline mb-1 mr-2 image"
            src="images/auto.png"
          ></img>
          <b>SumX</b>
        </button>
      </div>
    </div>
  );
};

export default Editor;
