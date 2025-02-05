let isContentVisible = false; // Flag to track the state of the content

function matthewVideos() {
  var divElement = document.getElementsByClassName('matthewVideos')[0];

  if (isContentVisible) {
    // Clear the div if content is visible
    divElement.innerHTML = '';
    isContentVisible = false; // Update the flag
  } else {
    // Inject new content if the div is empty
    divElement.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cD2IAPgXWLk?si=muhybGoVq-ZNJny1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/W46OBlvZyt8?si=WkzrKQsTYA8HsglK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
    isContentVisible = true; // Update the flag
  }
}
