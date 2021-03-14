class Content extends React.Component {

    render() {
        return React.createElement(
            'div',
            null,
            this.props.currentDate,
            ' + ',
            this.props.rows,
            ' + ',
            this.props.locale
        );
    }
}

// Content.defaultProps={
//     currentDate: Date(),
//     rows: 4,
//     locale: 'US'
// }

Content.propTypes = {
    currentDate: PropTypes.string,
    rows: PropTypes.number,
    locale: PropTypes.oneOf(['US', 'CA', 'MX', 'EU'])
};