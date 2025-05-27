(function () {
    const element = document.documentElement; // 전체 화면을 대상으로
  
    const opt = {
      margin:       0,
      filename: `${document.title}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  {
        scale: 2,
        useCORS: true,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      },
      jsPDF: {
        unit: 'px',
        format: [
          document.documentElement.scrollWidth,
          document.documentElement.scrollHeight
        ],
        orientation: 'portrait'
      }
    };
  
    console.log("[PDF-EXT] Generating PDF with adjusted screen ratio...");
    html2pdf().set(opt).from(element).save();
  })();
  