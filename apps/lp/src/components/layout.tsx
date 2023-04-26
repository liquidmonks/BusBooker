import React from "react"
import tw from "tailwind-styled-components"

const Container = tw.div``

export const Layout = ({ children }) => {
  return (
<Container>
        <main>{children}</main>
       </Container>
  )
}
