// let fa=[
//     {path:"Child Details (Responses) - Form Responses 1.csv",head:"CSV1"}
// ]
// for(let i=0;i<fa.length;i++){
//     document.querySelector('body').innerHTML
//     +=`
//     <table id="table${i}"><thead>
//     <tr>
//     <th>${fa[i].head}</th>
//     </tr></thead>
//     </table>`;
// }

const x=document.querySelector("input");
x.addEventListener("change",()=>{
    const fr=new FileReader();
    fr.onloadend=e=>{
        let r=fr.result.split("\n").map(e=>{
            return e.split(",")
        });
        r.forEach(e => {
            let m=e.map(e=>{
                return `<td>${e}</td>`;
            }).join("");
            console.log(m)
            const ce=document.createElement('tr');
            ce.innerHTML=m;
            document.querySelector("table").append(ce);
        });
        // console.log(r); 
    }
    fr.readAsText(x.files[0]);
})