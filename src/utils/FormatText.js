export const formatText = (text) => {
    // Convert headers (Markdown style: # Header 1, ## Header 2, etc.)
    text = text.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
    text = text.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
    text = text.replace(/^### (.*?)$/gm, "<h3>$1</h3>");

    // Bold text (wrapped in **)
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Italic text (wrapped in *)
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Ordered list (starting with 1.)
    text = text.replace(/^\d+\.(.*?)$/gm, "<ol><li>$1</li></ol>");

    // Unordered list (starting with -)
    text = text.replace(/^- (.*?)$/gm, "<ul><li>$1</li></ul>");

    // Links (with [text](url))
    text = text.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );

    // Inline code (wrapped in backticks)
    text = text.replace(/`(.*?)`/g, "<code>$1</code>");

    // Line breaks (new lines between paragraphs)
    text = text.replace(/\n/g, "<br>");

    // Convert paragraphs (empty lines between blocks of text)
    text = text.replace(/\n\n/g, "</p><p>");

    // Ensure the text is wrapped in <p> tags for paragraphs
    text = `<p>${text}</p>`;

    return text;
  };


  export const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };