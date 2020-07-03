import React, { Component } from "react";
import SHOP_DATA from "./shopdata";
import PreviewCollec from "../../components/previewCollec/PreviewCollec";

export default class shop extends Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collection }) => (
          <PreviewCollec key={id} {...collection} />
        ))}
      </div>
    );
  }
}
