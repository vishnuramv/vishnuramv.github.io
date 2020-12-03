/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { GlobalProvider } from './src/context/GlobalContext'
import "firebase/firestore"

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalProvider>
            {element}
        </GlobalProvider>
    )
}