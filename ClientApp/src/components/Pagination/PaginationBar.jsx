import React, { Component } from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(1);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(1);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 12;

        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <Pagination className="pagination justify-content-center" listClassName="justify-content-center">
              <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                <PaginationLink onClick={() => this.setPage(1)}><i className="fa fa-angle-double-left" /></PaginationLink>
              </PaginationItem>
              <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                <PaginationLink onClick={() => this.setPage(pager.currentPage - 1)}><i className="fa fa-angle-left" /></PaginationLink>
              </PaginationItem>
              {pager.pages.map((page, index) =>
                <PaginationItem className={pager.currentPage === page ? 'active' : ''} key={index}>
                  <PaginationLink onClick={() => this.setPage(page)}>{page}</PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <PaginationLink onClick={() => this.setPage(pager.currentPage + 1)}><i className="fa fa-angle-right" /></PaginationLink>
              </PaginationItem>
              <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <PaginationLink onClick={() => this.setPage(pager.totalPages)}><i className="fa fa-angle-double-right" /></PaginationLink>
              </PaginationItem>
            </Pagination>
        );
    }
}

export default PaginationBar;
