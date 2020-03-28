import React from "react";
import HeadTag from "../../components/Head";
import style from "./style.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeadTag />
        <h1 className={style.title}>Nextjs Boilerplate pmartinez</h1>
      </div>
    );
  }
}

export default Index;
