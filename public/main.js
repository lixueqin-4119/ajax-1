let n=1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("get",`/page${n+1}`);
    request.onreadystatechange=()=>{
        if(request.readyState===4 &&request.readyState===200){
            console.log(request.response)  
            const array=JSON.parse(request.response)
            array.forEach(item=>{
                const li=document.createElement('li')
                li.textContent=item.id
                xxx.appendChild(li);
            });
            n+=1;
        };
       };
   request.send()
}

getJSON.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("get","/5.json");
    request.onreadystatechange=()=>{
        if(request.readyState===4 &&request.readyState===200){
            console.log(request.response)  
            const object=JSON.parse(request.response)
            myName.textContent=object.name
            console.log(object)
        };
       };
   request.send()
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest();
 request.open("get","/4.xml");
 request.onreadystatechange=()=>{
     if(request.readyState===4 &&request.readyState===200){
         console.log(request.responseXML)
         const dom=request.responseXML;
         const text=dom.getElementsByTagName('warning')[0].textContent
console.log(text.trim())
     }
    }
request.send()
}

getHTML.onclick=()=>{
 const request=new XMLHttpRequest();
 request.open("get","/3.html");
 request.onload=()=>{
    console.log(request.response)
    const div=document.createElement('div')//创建script标签
    div.innerHTML=request.response//填写script内容
    document.body.appendChild(div)

 }
 request.onerror=()=>{}
 request.send();
}
getJS.onclick=()=>{
const request=new XMLHttpRequest();
request.open("get","/2.js");
request.onload=()=>{
    console.log(request.response)
    const script=document.createElement('script')//创建script标签
    console.log(script)
    script.innerHTML=request.response//填写script内容
    document.body.appendChild(script)
}
request.onerror=()=>{}
request.send();
};

getCss.onclick=()=>{
const request=new XMLHttpRequest();
request.open("get","/style.e308ff8e.css");
request.onreadystatechange=()=>{
    console.log(request.readyState)
    //下载完成，但不知道是成功2xx 还是失败4xx 5xx
    if(request.readyState===4){
        console.log('下载完成')
        if(request.status>=200 && request.status<300){
            console.log(request.response)
            const style=document.createElement('style')//创建style标签
            style.innerHTML=request.response//填写style内容
            document.head.appendChild(style)//插到头里面
        }else{
            alert('加载css失败')
        }
    }
};
request.send();
};