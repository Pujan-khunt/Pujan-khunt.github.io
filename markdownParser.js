document.addEventListener('DOMContentLoaded', () => {
  // path to the md file
  const markdownFile = 'notes/example.md';
  
  // fetch is an API which allows to send HTTP requests to servers and load resources like JSON, textfiles, or HTML. Here the fetch command sends a request to the server to get the file located at 'notes/example.md'
  
  // the .then() command tells what to do next after fetching the .md file
  // the output of the fetch command will be stored in the response parameter
  // the first .then takes the response from the fetch API and converts it into a readable string using the response.text()
  // the response.ok is a property of the Response object that indicates whether a HTTP request is successful. it returns a boolean value between 200-299 for sucess and any other value for failure
  
  // now the markdown parameter contains the readable string
  
  // the .catch block handles any errors like network issues or file not founds
  fetch(markdownFile)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Could not fetch ${markdownFile}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(markdown => {
      // using the Marked.js library the .md will be converted to .html and then loaded onto the DOM
      // the marked.js library is a fast .md parser that converts .md to .html
    
      const htmlContent = marked.parse(markdown); // convert the markdown(readable string) to HTML
      
      // Injection the html content into the DOM
      const contentDisplayElement = document.getElementById('content');
      contentDisplayElement.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Error fetching or parsing the Markdown file:', error);
      const contentDisplayElement = document.getElementById('content');
      contentDisplayElement.innerHTML = `
      <p style="color: red">
        Failed to Load Content. :(
        <br/>
        Try Refreshing. Maybe it works
      </p>
      `
    })
})