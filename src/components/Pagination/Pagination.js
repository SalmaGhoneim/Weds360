import React from "react";
import "./Pagination.css";
import paginationArrowRight from "../../assets/icons/paginationArrowRight.svg";
const Pagination = props => {
  const start = props.currPage >= 8 ? props.currPage - 4 : 1;
  console.log(props.currPage);
  console.log(props.pageCount);
  console.log(props.currPage === props.pageCount);

  return (
    <div className="pagination">
      {/* Previous button */}
      <div
        onClick={props.decrementPage}
        className={
          props.currPage === 1
            ? "pageNumberBox prevNextBox disabled"
            : "pageNumberBox prevNextBox "
        }
      >
        <img className="arrow rotate180" src={paginationArrowRight} alt="" />
        Previous
      </div>

      {/* the one button stuck first */}
      {start < 2 ? null : (
        <div
          onClick={() => props.goToPage(1)}
          key="page1"
          className={
            props.currPage === 1 ? "pageNumberBox selected" : "pageNumberBox"
          }
        >
          1
        </div>
      )}

      {/* the two button stuck first */}
      {start < 2 ? null : (
        <div
          onClick={() => props.goToPage(2)}
          key="page2"
          className={
            props.currPage === 2 ? "pageNumberBox selected" : "pageNumberBox"
          }
        >
          2
        </div>
      )}

      {/* ... indicating more pages */}
      {start < 4 ? null : <div className="pageNumberBox">...</div>}

      {/* 4 radius around currPage */}
      {Array(9)
        .fill()
        .map((page, i) =>
          start + i > props.pageCount ? null : (
            <div
              onClick={() => props.goToPage(start + i)}
              key={"page" + i}
              className={
                props.currPage === start + i
                  ? "pageNumberBox selected"
                  : "pageNumberBox"
              }
            >
              {start + i}
            </div>
          )
        )}
      {/* ... indicating more pages */}
      {start + 9 > props.pageCount - 2 ? null : (
        <div className="pageNumberBox">...</div>
      )}

      {/* before last page stuck at end */}
      {start + 9 > props.pageCount ? null : (
        <div
          onClick={() => props.goToPage(props.pageCount - 1)}
          className={
            props.currPage === props.pageCount - 1
              ? "pageNumberBox selected"
              : "pageNumberBox"
          }
        >
          {props.pageCount - 1}
        </div>
      )}
      {/* last page stuck at end */}

      {start + 9 > props.pageCount ? null : (
        <div
          onClick={() => props.goToPage(props.pageCount)}
          className={
            props.currPage === props.pageCount
              ? "pageNumberBox selected"
              : "pageNumberBox"
          }
        >
          {props.pageCount}
        </div>
      )}
      {/* next button */}
      <div
        onClick={props.incrementPage}
        className={
          props.currPage === props.pageCount
            ? "pageNumberBox prevNextBox disabled"
            : "pageNumberBox prevNextBox"
        }
      >
        Next
        <img className="arrow" src={paginationArrowRight} alt="" />
      </div>
    </div>
  );
};

export default Pagination;
