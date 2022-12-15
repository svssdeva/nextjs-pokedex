import React, { useState } from 'react';
import { Document, Outline, Page } from 'react-pdf';
import cn from 'clsx';
export default function PdfComponent({pdf
                                     }: {
  pdf: string;
}) {
  const docOptions= {};
  const pageOptions = {};
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  // @ts-ignore
  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  // @ts-ignore
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  // @ts-ignore
  // @ts-ignore
  return (
    <div className={cn('pdf-here')}>
      {/*scrollable*/}
      {/*<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>*/}
      {/*  {Array.from(new Array(numPages), (el, index) => (*/}
      {/*    <Page key={`page_${index + 1}`} pageNumber={index + 1} />*/}
      {/*  ))}*/}
      {/*</Document>*/}
      {/*page buttons*/}
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Outline onItemClick={onItemClick} />
        <Page scale={4} renderTextLayer={false} renderAnnotationLayer={false} height={600} width={450} pageNumber={pageNumber} />
      </Document>
      <div className={'more-btn-stuff'}>
        <p className={'py-2 m-0'}>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <div className={cn('btn-section py-2')}>
          <button  type="button"
                   disabled={pageNumber <= 1}
                   onClick={previousPage}
                   className="next-prev-btn mr-2 bg-indigo-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-indigo-500 transition-all duration-300"
          > {'<'}
          </button>
          <button   type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    className="next-prev-btn bg-indigo-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-indigo-500 transition-all duration-300"
          > {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
