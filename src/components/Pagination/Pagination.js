import React from "react";
import "./Pagination.css";
import paginationArrowRight from "../../assets/icons/paginationArrowRight.svg";
const Pagination = props => {
  const minOf10 = Math.min(10, props.pageCount);
  return (
    <div className="pagination">
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
      {Array(minOf10)
        .fill()
        .map((page, i) => (
          <div
            onClick={() => props.goToPage(i + 1)}
            key={i}
            className={
              props.currPage == i + 1
                ? "pageNumberBox selected"
                : "pageNumberBox"
            }
          >
            {i + 1}
          </div>
        ))}
      {props.pageCount < 13 ? null : <div className="pageNumberBox">...</div>}
      {props.pageCount < 12 ? null : (
        <div
          onClick={() => props.goToPage(props.pageCount - 1)}
          className={
            props.currPage == props.pageCount - 1
              ? "pageNumberBox selected"
              : "pageNumberBox"
          }
        >
          {props.pageCount - 1}
        </div>
      )}
      {props.pageCount < 11 ? null : (
        <div
          onClick={() => props.goToPage(props.pageCount)}
          className={
            props.currPage == props.pageCount
              ? "pageNumberBox selected"
              : "pageNumberBox"
          }
        >
          {props.pageCount}
        </div>
      )}

      <div
        onClick={props.incrementPage}
        className={
          props.currPage == props.pageCount
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
