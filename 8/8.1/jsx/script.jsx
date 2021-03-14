ReactDOM.render(
    <div>
        <Content currentDate={Date()} rows={4} locale='CHINA'/>
        <Content currentDate={10} rows='yes' locale={100}/>
    </div>,
    document.getElementById('content')
)

// ReactDOM.render(
//     <div>
//         <Content/>
//         <Content currentDate={Date()} rows={4} locale='US'/>
//         <Content currentDate={10} rows='yes' locale={100}/>
//     </div>,
//     document.getElementById('content')
// )