import React from 'react'

let obj = {
    premier(props){
        return (<div>Nom: {props.val} </div>)
},
    second(props){
        return(<div>Prenom: {props.val}</div>)
    }
}

export const Parent = (props) => {
    const Choice = obj[props.type]
    return <Choice val={props.val} />
}
