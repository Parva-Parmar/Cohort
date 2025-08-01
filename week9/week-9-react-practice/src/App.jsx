

function App(){
    return (
        <div>
            <PostComponent/>
        </div>
    )
}

function PostComponent() {
    return <div style={{width : 200, backgroundColor: "white" , borderRadius : 10 ,borderColor: "gray" , borderWidth:1,display:"flex"}}>
        <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYW_WqyRD70g-xHtOnRgc-7Q2L-gisOaYzg&s"} style={{width:20,height:20,borderRadius:20}}/>
    </div>
}

export default App;