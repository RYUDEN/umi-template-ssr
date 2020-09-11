import React from 'react'
import { history , Link, connect } from 'umi'
const GlobalHeader = (props) => {
    const { isLogin } = props
    return (
        <div >
            <p>{isLogin?'已登录':'未登录'}</p>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>
            </ul>
        </div>
    )
} 
export default connect(({ user }) => ({
    isLogin:user.isLogin
}))(GlobalHeader) 