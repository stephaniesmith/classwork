import React, { PureComponent } from 'react';

export function connect(mapStateToProps, mapDispatchToProps, mergeProps) {


  return function(ComponentToWrap) {
    
    return class Container extends PureComponent {

      render() {
        const { store, dispatch } = this.context;
        const mappedStateToProps = mapStateToProps(store, this.props);
        const mappedDispatchProps = mapDispatchToProps(dispatch);

        if(mergeProps) {
          const props = mergeProps(mappedStateToProps, mappedDispatchProps, this.props);
          return <ComponentToWrap {...props}/>;
        }

        return <ComponentToWrap 
          {...mappedStateToProps}
          {...mappedDispatchProps}
          {...this.props}
        />;
      }
    };

  };

}