import React, { useEffect } from "react";

const PDFViewer = ({ pdfUrl }) => {
  useEffect(() => {
    const loadAndRenderPDF = async () => {
      try {
        const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        const viewerContainer = document.getElementById("pdf-viewer");

        const pdfViewer = new window.pdfjsLib.PDFViewer({
          container: viewerContainer,
        });

        pdfViewer.setDocument(pdf);
      } catch (error) {
        console.error("Erreur lors du chargement du PDF :", error);
      }
    };

    loadAndRenderPDF();
  }, [pdfUrl]);

  return <div id="pdf-viewer" className="pdfViewer" />;
};

export default PDFViewer;
