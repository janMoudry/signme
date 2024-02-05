import { useRef, useState } from "react";
import { Pdf } from "signify-pdf";
import "signify-pdf/dist/index.css";

const App = () => {
  const ref = useRef<null | HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [code, setCode] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-600 gap-5">
      <h1 className="text-xl sm:text-4xl font-bold text-center text-white ">
        Welcome to Signify PDF
      </h1>
      <h2 className="text-sm sm:text-2xl font-bold text-center text-white ">
        Signify PDF is a simple and easy to use PDF signer
      </h2>

      <div className="flex flex-col items-center justify-center w-full sm:w-1/3 px-5 sm:px-0">
        <h1 className="text-md sm:text-2xl font-bold text-center text-white">
          Sign down with Code
        </h1>
        <input
          className="w-full sm:w-1/2 p-2 rounded-md border border-dashed"
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              ref.current?.click();
            }
          }}
        />
      </div>

      <div
        className="w-11/12 aspect-video border 
      border-dashed rounded-lg flex items-center justify-center cursor-pointer
        sm:w-1/3 p-5 sm:p-10 bg-slate-700 hover:bg-slate-800 transition-all duration-300 ease-in-out
      "
        onClick={() => {
          ref.current?.click();
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files) {
            setFile(e.dataTransfer.files[0]);
          }
        }}
      >
        <h1 className="text-md sm:text-2xl font-bold text-center text-white">
          {file ? file.name : "Click to upload PDF file"}
        </h1>
        <input
          type="file"
          className="hidden w-full h-full"
          accept=".pdf"
          ref={ref}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>

      {file && (
        <Pdf
          file={file}
          onClose={() => {
            setFile(null);
          }}
          open={!!file}
          texts={{
            signDown: "Sign Down",
            addSignature: "Add Signature",
            reset: "Reset",
            save: "Save",
            close: "Close",
            download: "Download",
            placeHolderTooltip: "Drag and drop signature here",
          }}
          customStyles={{
            button: {
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
            },
          }}
          shouldDownload={true}
          customPdfDownloadFunction={() => {
            setFile(null);
          }}
          signWithCode={!!code}
          code={code}
        />
      )}

      <footer className="absolute bottom-0 w-full text-center text-white p-5">
        <p>
          Made with ❤️ by
          <a
            href="https://github.com/janMoudry"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            {" "}
            @janMoudry
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
