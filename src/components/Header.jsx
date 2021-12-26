import PropTypes from 'prop-types'

function Header({bgColor, textColor,text}) {
    const headerStyle ={
        backgroundColor :bgColor,
        color:textColor
    }
    
    return (
        <header className="container" style={headerStyle}>
            <h2> {text}</h2>
        </header>
    )
}

Header.defaultProps={
    text : "Feedback App",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:"#ff6a95"
}
Header.propTypes ={
    text:PropTypes.string
}
export default Header
