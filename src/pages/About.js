import React from 'react'
import { useNavigate } from 'react-router-dom'


export const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>About page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam est quisquam veniam magni sint hic dignissimos minus libero provident dolorem, recusandae quia excepturi nemo praesentium nam quo odio obcaecati sapiente accusantium eius. Alias quia sapiente totam, dolore dolorem aspernatur deleniti doloremque fuga corrupti magnam aliquam in perspiciatis quidem corporis possimus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium perferendis eaque dolor quisquam praesentium in voluptatem aliquid beatae iusto quia, similique tempore cumque nulla est incidunt aut eos repellat tempora a veritatis commodi vel culpa quasi. Placeat, soluta neque adipisci, totam, officia ipsum et laboriosam cumque eum omnis cupiditate.</p>
            <button onClick={() => navigate('/')}>Go to home</button>
        </div>
    )
}
