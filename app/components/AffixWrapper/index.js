import React, { Component, PropTypes } from 'react';

export default class Affix extends Component {

  static propTypes = {
    offset: PropTypes.number,
  };

  static defaultProps = {
    offset: 0,
  };

  constructor() {
    super();
    this.state = {
      affix: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const offset = this.props.offset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false,
      });
    }
  };

  render() {
    const affix = this.state.affix ? 'affix' : '';
    const { className, ...props } = this.props;

    return (
      <div {...props} className={`${className || ''} ${affix}`}>
        {this.props.children}
      </div>
    );
  }
}

Affix.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};
