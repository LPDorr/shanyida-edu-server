import{d as ee,N as te,B as oe,r as C,a as R,z as le,L as ne,c as S,b as e,w as l,F as b,e as s,o as v,n as se,u as V,h as r,i as m,R as p,E as y,M as h,q as ae,t as ue,p as de,g as ie,A as ce,_ as re}from"./index.a6fce3c1.js";const k=F=>(de("data-v-15eac6c0"),F=F(),ie(),F),_e={style:{display:"flex","align-items":"center"}},fe={class:"free-edit"},pe=["onClick"],me=k(()=>r("span",null,"\u529F\u80FD\u5206\u914D",-1)),Fe=k(()=>r("span",null,"\u65B0\u589E\u89D2\u8272",-1)),ge={class:"dialog-footer"},ye=m("\u53D6\u6D88"),he=m("\u4FDD\u5B58"),De=k(()=>r("span",null,"\u89D2\u8272\u529F\u80FD\u5206\u914D",-1)),ve=m("\u786E\u5B9A"),ke=m("\u91CD\u7F6E"),Ee=m("\u53D6\u6D88"),we=ee({__name:"EduRoleFunc",setup(F){const d=te(),E=oe(),g=C(null),_=C(null),u=R({isSetting:!1,currentFuncs:[],model:{role_id:0,role_func_ids:""}}),o=R({isEdit:!1,editModel:{role_id:0,role_name:""}}),w=()=>{g.value.setCheckedKeys(u.currentFuncs.reduce((t,n)=>(n.func_key!==""&&t.push(n.func_id),t),[]))},$=async t=>{u.model.role_id=t,u.currentFuncs=await p.getRoleFunc(t),await h(()=>{u.isSetting=!0,h(()=>{w()})})},A=async()=>{const t=[...g.value.getHalfCheckedKeys(),...g.value.getCheckedKeys()];t.length>1&&t.shift(),u.model.role_func_ids=t.join(","),await p.saveRoleFunc(u.model),u.isSetting=!1,y({message:"\u89D2\u8272\u529F\u80FD\u8BBE\u7F6E\u6210\u529F\uFF01",customClass:"messageIndex",type:"success"})};le(async()=>{try{await ne([()=>d.init(),()=>E.init()])}catch{}});const L=async t=>{await ce.confirm(`\u786E\u5B9A\u8981\u5220\u9664"${t.role_name}"\u89D2\u8272\u5417\uFF1F`,"Warning",{showClose:!1,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await p.remove(t.role_id);let n=d.roleList.findIndex(i=>i.role_id===t.role_id);d.roleList.splice(n,1),y({message:`"${t.role_name}"\u89D2\u8272\u5DF2\u5220\u9664\uFF01`,type:"success"})},I=()=>{var t;(t=_.value)==null||t.resetFields(),o.editModel.role_id=0,o.editModel.role_name="",h(()=>o.isEdit=!0)},U=t=>{var n;(n=_.value)==null||n.resetFields(),o.editModel.role_id=t.role_id,o.editModel.role_name=t.role_name,h(()=>o.isEdit=!0)},z=async()=>{var t;if(o.editModel.role_id===0)await((t=_.value)==null?void 0:t.validateField()),await p.add(o.editModel),d.roleList.push({...o.editModel}),o.isEdit=!1,y({message:`"${o.editModel.role_name}"\u6DFB\u52A0\u6210\u529F\uFF01`,type:"success"});else{await p.update(o.editModel);let n=d.roleList.findIndex(i=>i.role_id===o.editModel.role_id);d.roleList.splice(n,1,{...o.editModel}),o.isEdit=!1,y({message:`"${o.editModel.role_name}"\u6DFB\u52A0\u6210\u529F\uFF01`,type:"success"})}},K={role_name:[{required:!0,message:"* \u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"},{required:!0,validator:(t,n,i)=>{var c;if(n===((c=d.roleList.find(D=>D.role_name===o.editModel.role_name))==null?void 0:c.role_name))i(new Error(`* \u6B64"${o.editModel.role_name}",\u89D2\u8272\u5DF2\u5B58\u5728\uFF01`));else{if(o.editModel.role_name!==""){if(!_.value)return;_.value.validateField("checkPass",()=>null)}i()}},trigger:"blur"},{min:2,max:20,message:"* \u89D2\u8272\u540D\u79F0\u5E94\u57282-20\u4E4B\u95F4",trigger:"blur"}]};return(t,n)=>{const i=s("User"),c=s("el-icon"),D=s("Edit"),N=s("Setting"),P=s("Delete"),x=s("el-card"),M=s("el-col"),T=s("Plus"),q=s("el-row"),H=s("el-input"),j=s("el-form-item"),W=s("el-form"),f=s("el-button"),G=s("el-dialog"),J=s("el-header"),O=s("el-tree"),Q=s("el-main"),X=s("el-footer"),Y=s("el-container"),Z=s("el-drawer");return v(),S(b,null,[e(q,{gutter:24,style:{padding:"0 50px"}},{default:l(()=>[(v(!0),S(b,null,se(V(d).roleList,a=>(v(),ae(M,{span:6,key:a.role_id,style:{"margin-top":"10px"}},{default:l(()=>[e(x,null,{default:l(()=>[r("span",_e,[e(c,{style:{"font-size":"20px","margin-right":"10px"}},{default:l(()=>[e(i)]),_:1}),r("span",null,ue(a.role_name),1)]),r("div",fe,[e(c,{onClick:B=>U(a)},{default:l(()=>[e(D)]),_:2},1032,["onClick"]),r("div",{class:"setting",onClick:B=>$(a.role_id)},[e(c,null,{default:l(()=>[e(N)]),_:1}),me],8,pe),e(c,{onClick:B=>L(a)},{default:l(()=>[e(P)]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128)),e(M,{span:6,class:"add-new"},{default:l(()=>[e(x,{style:{color:"#409EFF","background-color":"#ffffff"}},{default:l(()=>[e(c,{style:{"font-size":"30px",cursor:"pointer"},onClick:I},{default:l(()=>[e(T)]),_:1})]),_:1})]),_:1})]),_:1}),e(G,{modelValue:o.isEdit,"onUpdate:modelValue":n[2]||(n[2]=a=>o.isEdit=a),width:"500px",center:"",draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{header:l(()=>[Fe]),footer:l(()=>[r("span",ge,[e(f,{onClick:n[1]||(n[1]=a=>o.isEdit=!1)},{default:l(()=>[ye]),_:1}),e(f,{type:"primary",onClick:z},{default:l(()=>[he]),_:1})])]),default:l(()=>[e(W,{ref_key:"formRef",ref:_,model:o.editModel,rules:K,"status-icon":""},{default:l(()=>[e(j,{label:"\u89D2\u8272\u540D\u79F0\uFF1A",prop:"role_name"},{default:l(()=>[e(H,{modelValue:o.editModel.role_name,"onUpdate:modelValue":n[0]||(n[0]=a=>o.editModel.role_name=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(Z,{modelValue:u.isSetting,"onUpdate:modelValue":n[4]||(n[4]=a=>u.isSetting=a),"close-on-click-modal":!1,"close-on-press-escape":!1,size:"35%","with-header":!1,"show-close":!1},{default:l(()=>[e(Y,null,{default:l(()=>[e(J,{height:"40px"},{default:l(()=>[De]),_:1}),e(Q,null,{default:l(()=>[e(O,{data:V(E).treeData,props:{label:"func_name"},"default-expand-all":"","node-key":"func_id",ref_key:"treeRef",ref:g,class:"custom-tree","show-checkbox":""},null,8,["data"])]),_:1}),e(X,null,{default:l(()=>[e(f,{type:"primary",onClick:A},{default:l(()=>[ve]),_:1}),e(f,{type:"success",onClick:w},{default:l(()=>[ke]),_:1}),e(f,{onClick:n[3]||(n[3]=a=>u.isSetting=!1),type:"info"},{default:l(()=>[Ee]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const Be=re(we,[["__scopeId","data-v-15eac6c0"]]);export{Be as default};
