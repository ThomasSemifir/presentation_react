import React, { useEffect } from 'react'

export const ComposantExemple = () => {

    useEffect(() => {
        return () => console.log("à la destruction du component")
    })

        return (
            <p>Coucou!</p>
        )
}

export default ComposantExemple
