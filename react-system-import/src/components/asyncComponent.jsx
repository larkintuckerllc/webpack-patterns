import React from 'react';

export default getComponent => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { DynamicComponent: null };
    }
    componentWillMount() {
      const { DynamicComponent } = this.state;
      if (DynamicComponent === null) {
        getComponent().then(({ default: Component }) => {
          this.setState({ DynamicComponent: Component });
        });
      }
    }
    render() {
      const { DynamicComponent } = this.state;
      if (DynamicComponent !== null) {
        return <DynamicComponent {...this.props} />;
      }
      return null;
    }
  }
);
