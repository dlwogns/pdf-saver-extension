function injectInjectedJS() {
  const runScript = document.createElement("script");
  runScript.src = chrome.runtime.getURL("injected.js");
  document.body.appendChild(runScript);
}
if (!document.getElementById("html2pdf-script")) {
  const libScript = document.createElement("script");
  libScript.id = "html2pdf-script";
  libScript.src = chrome.runtime.getURL("libs/html2pdf.bundle.min.js");
  libScript.onload = () => {
    injectInjectedJS();
  };
  document.body.appendChild(libScript);
} else {
  libScript = document.getElementById("html2pdf-script");
  libScript.id = "html2pdf-script";
  libScript.src = chrome.runtime.getURL("libs/html2pdf.bundle.min.js");
  injectInjectedJS();
  document.body.appendChild(libScript);
}
