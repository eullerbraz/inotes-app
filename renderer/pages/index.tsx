import { useEffect, useState } from "react";
import Head from "next/head";
import Textarea from "../components/Textarea";

const IndexPage = () => {
  const [text, setText] = useState("");
  const [pageTitle, setPageTitle] = useState("new-file.txt | iNotes");

  useEffect(() => {
    const setFile = (_event, file) => {
      setText(file.content);
      setPageTitle(`${file.name} | iNotes`);
    };

    global.ipcRenderer.addListener("set-file", setFile);

    return () => {
      global.ipcRenderer.removeListener("set-file", setFile);
    };
  }, []);

  useEffect(() => {
    const updateContent = () => {
      global.ipcRenderer.send("update-content", text);
    };

    updateContent();
  }, [text]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Textarea value={text} onChange={({ target }) => setText(target.value)} />
    </>
  );
};

export default IndexPage;
