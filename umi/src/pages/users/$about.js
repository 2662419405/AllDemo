import React from 'react'

export default function $about({match,history}) {
    
    return (
        <div>
            动态路由组件 { match.params.about }
            <button
                onClick={ ()=>{
                    history.go(-1) 
                } }
            >返回首页</button>
        </div>
    )
}
