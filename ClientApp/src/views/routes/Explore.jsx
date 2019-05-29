import React, { Component, Fragment } from "react";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// Other components
import Pagination from "components/Pagination/PaginationBar.jsx";

// index page sections
import Header from "../sections/Header.jsx";

class Explore extends Component {
  constructor() {
    super();

    var exampleItems = [...Array(150).keys()].map(i => ({
      id: i + 1,
      name: "Podcast " + (i + 1)
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    return (
      <Fragment>
        <MainNavbar />
        <main ref="main">
          <Header />
          <section className="section section-components pb-0">
            <div className="container">
              <div className="justify-content-center">
                <h2 className="display-3">Explore</h2>
                {this.state.pageOfItems.map(item => (
                  <h4 key={item.id}>{item.name}</h4>
                ))}
                <Pagination
                  items={this.state.exampleItems}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Explore;
