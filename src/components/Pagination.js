import React from "react";
import paginationArrowRight from "../assets/icons/paginationArrowRight.svg";
import styled from "styled-components";
const Pagination = props => {
  const start = props.currPage >= 8 ? props.currPage - 4 : 1;
  return (
    <div className={props.className}>
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
    </div>
  );
};

export default styled(Pagination)`
  .pagination {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .pageNumberBox {
    display: flex;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: transparent;
    color: rgb(2, 77, 76);
    border: 1px solid rgb(211, 211, 211);
    border-radius: 2px;
    line-height: 25px;
    padding: 2px 5px 2px 5px;
    cursor: pointer;
    font-size: 14px;
  }
  .selected {
    background-color: rgb(2, 77, 76);
    color: white;
    cursor: default;
  }
  .disabled {
    cursor: not-allowed;
  }
  .arrow {
    color: rgb(2, 77, 76);
  }
  .rotate180 {
    transform: rotate(180deg);
  }

  .prevNextBox {
    width: auto;
    padding: 2px 8px 2px 8px;
  }
`;
