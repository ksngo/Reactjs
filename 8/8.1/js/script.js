ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Content, { currentDate: Date(), rows: 4, locale: 'CHINA' }),
    React.createElement(Content, { currentDate: 10, rows: 'yes', locale: 100 })
), document.getElementById('content'));

// ReactDOM.render(
//     <div>
//         <Content/>
//         <Content currentDate={Date()} rows={4} locale='US'/>
//         <Content currentDate={10} rows='yes' locale={100}/>
//     </div>,
//     document.getElementById('content')
// )