// /pages/about.js

export default () => 
<div>
    Hello world
    <p style={{ color: 'red' }}>hi there</p>
    <style jsx>{`
    p {
        color: blue;
    }
    div {
        background: red;
    }
    @media (max-width: 600px) {
        div {
        background: blue;
        }
    }
    `}</style>
    <style global jsx>{`
    body {
        background: #ccc;
    }
    `}</style>
</div>
