//Website made and managed by Liefe Sutliff
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {navLinks.classList.toggle("active"); toggleBtn.classList.toggle("activate");});
});

function textToggle24() {
  var element = document.getElementById('toggle2024Retreat');

  if (element.innerText === '↓ Open 2024 Sessions ↓') {
    element.innerText = '↑ Close 2024 Sessions ↑';
  } else {
    element.innerText = '↓ Open 2024 Sessions ↓';
  }
}

function textToggle23() {
  var element = document.getElementById('toggle2023Retreat');

  if (element.innerText === '↓ Open 2023 Sessions ↓') {
    element.innerText = '↑ Close 2023 Sessions ↑';
  } else {
    element.innerText = '↓ Open 2023 Sessions ↓';
  }
}

let retreat2024ContentVisible  = false; // Flag to track the state of the content

function womensRetreat2024() {
  var divElement = document.getElementsByClassName('retreatVideos2024')[0];

  if (retreat2024ContentVisible) {
    // Clear the div if content is visible
    divElement.innerHTML = '';
    retreat2024ContentVisible = false; // Update the flag
  } else {
    // Inject new content if the div is empty
    divElement.innerHTML = `
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/EJvKXbpLDSY?si=PHv64iuDw2yHvRLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/ktjagTqU4to?si=62cjM5froVOilM6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/xXdZUW44wPM?si=VRLNeQA4dfdx9nBN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/Hq7PQUkItnM?si=BEOddL5Dzeopw1os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>
    `;
    retreat2024ContentVisible = true; // Update the flag
  }
}

let retreat2023ContentVisible  = false; // Flag to track the state of the content

function womensRetreat2023() {
  var divElement = document.getElementsByClassName('retreatVideos2023')[0];

  if (retreat2023ContentVisible) {
    // Clear the div if content is visible
    divElement.innerHTML = '';
    retreat2023ContentVisible = false; // Update the flag
  } else {
    // Inject new content if the div is empty
    divElement.innerHTML = `
      <br><a href="media/WomensRetreat2023Session1.pdf" target="_blank" style="color: blue;">Download Session 1 PDF</a><br><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/5jswixRLqC8?si=3I0AIzdKjJV3-VwS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br><br>
      <a href="media/WomensRetreat2023Session2.pdf" target="_blank" style="color: blue;">Download Session 2 PDF</a><br><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/iqSDAezJ1M4?si=MJAljUE9dqhrSL6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br><br>
      <a href="media/WomensRetreat2023Session3.pdf" target="_blank" style="color: blue;">Download Session 3 PDF</a><br><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/KSQavE-01pU?si=uR4yQkvkaPNMGNBR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br><br>
      <a href="media/WomensRetreat2023Session4.pdf" target="_blank" style="color: blue;">Download Session 4 PDF</a><br><br>
      <div class="videoSize"><iframe src="https://www.youtube.com/embed/ptKTG3Y_odc?si=0bST-63gb1ifhhkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br><br>
    `;
    retreat2023ContentVisible = true; // Update the flag
  }
}