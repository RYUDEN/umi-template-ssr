import React from 'react'
import Header from '@/components/layout/globalHeader'
import Footer from '@/components/layout/globalFooter'

export default (props) => {
    return (
        <div>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </div>
    )
}
