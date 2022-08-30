const ScrollDownIndicator = (props) => {

    return (
        <div {...props}>
            <a className="horizontal-scroll-animation" href="#">
                <span className="horizontal-scroll-animation__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="horizontal-scroll-animation__line"></span>
                <span className="horizontal-scroll-animation__text">{props.text}</span>
            </a>
        </div>
    )
}

export default ScrollDownIndicator;