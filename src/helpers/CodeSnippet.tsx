interface CodeSnippetProps {
  code: string;
  language?: string;
}

function CodeSnippet({ code, language = 'tsx' }: CodeSnippetProps) {
  return (
    <div className="relative">
      <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 bg-white border border-gray-300 rounded px-2 py-1 text-xs hover:bg-gray-50"
        onClick={() => navigator.clipboard.writeText(code)}>
        Copy
      </button>
    </div>
  );
}

export default CodeSnippet;
