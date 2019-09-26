import React from 'react'

class Bottom extends React.Component{
    render(){
        return(
            <div>
            <div
            style={{marginBottom:"0"}}>
                <div className="linkFlex">
                    <a href="https://github.com/austinBurton426">
                <div className="icon git"/>
                </a>
                <a href="https://www.linkedin.com/in/austinburton/">
                <div className="icon linked"/>
                </a>
                <a href="https://www.upwork.com/o/profiles/users/_~01709eb6154ae2dfa0/">
                <div className="icon upWork"/>
                </a>
                </div>
                <div id="bottomBadge">
                    <p>austin.burton426@gmail.com</p><p>|</p><p>8012056560</p><p>|</p><p>SLC, UT</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bottom;