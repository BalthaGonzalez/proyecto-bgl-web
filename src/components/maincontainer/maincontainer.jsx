import "./_maincontainer.scss";

function MainContainer({ children }) {

    return (
        <div className="mainContainer__wrapper">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="mainContainer">{children}</div>
        </div>
    )
}

export default MainContainer;
