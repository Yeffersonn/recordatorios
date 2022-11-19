import { Children, cloneElement } from "react"

const Header = ({children, loading}) => {


    return (
        <header>
            {Children.toArray(children)
            .map( child => cloneElement(child, {loading}))
            }
        </header>
    )
}

export {Header}