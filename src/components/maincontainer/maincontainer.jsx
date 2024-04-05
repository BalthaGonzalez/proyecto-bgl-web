import "./_maincontainer.scss";

function MainContainer({ children }) {

    return (
        <div className="mainContainer__wrapper">
            <div className="mainContainer">{children}</div>
        </div>
    )
}

export default MainContainer;
