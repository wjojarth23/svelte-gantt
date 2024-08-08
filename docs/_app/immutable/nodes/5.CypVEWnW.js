import{s as q,e as h,a as f,c as m,b as N,y as x,g,f as r,r as b,i,h as F,n as V,o as I,p as J,H as Z,z as tt}from"../chunks/scheduler.CnFf9BV0.js";import{S as A,i as U,b as $,d as C,m as T,a as H,t as L,e as j}from"../chunks/index._WJlIO9N.js";import{g as at,a as K}from"../chunks/spread.CgU5AtxT.js";import{L as et}from"../chunks/layout.B4O1fyBi.js";import{S as Q,t as D,a as X}from"../chunks/index.CI19Wfew.js";function nt(d){let t,n,p="Click on row headers to expand and collapse.",s,e,c;return e=new Q({props:{from:D("8:00"),to:D("12:00"),tableHeaders:[{title:"Title",property:"label",type:"tree"}],rows:[{id:1,label:"Parent 1",expanded:!1,children:[{id:11,label:"Child 1"},{id:12,label:"Child 2"}]},{id:2,label:"Parent 2",expanded:!0,children:[{id:21,label:"Child 1",children:[{id:211,label:"Grandchild 1"}]},{id:22,label:"Child 2"},{id:23,label:"Child 3"}]},{id:3,label:"No children"}],ganttTableModules:[X]}}),{c(){t=h("div"),n=h("div"),n.textContent=p,s=f(),$(e.$$.fragment),this.h()},l(o){t=m(o,"DIV",{class:!0});var u=N(t);n=m(u,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-jgvk8t"&&(n.textContent=p),s=g(u),C(e.$$.fragment,u),u.forEach(r),this.h()},h(){b(n,"class","text-center border-b"),b(t,"class","example border my-12 svelte-ovg8kz")},m(o,u){i(o,t,u),F(t,n),F(t,s),T(e,t,null),c=!0},p:V,i(o){c||(H(e.$$.fragment,o),c=!0)},o(o){L(e.$$.fragment,o),c=!1},d(o){o&&r(t),j(e)}}}class st extends A{constructor(t){super(),U(this,t,null,nt,q,{})}}function ot(d){let t,n,p;return n=new Q({props:{from:D("8:00"),to:D("12:00"),rows:[{id:1,label:"Using the label"},{id:2,label:"Apply custom classes",classes:"row-gradient"},{id:3,label:"With custom html content",contentHtml:'<div class="h-full flex justify-center items-center"><span class="bg-gradient-to-tr from-pink-500 to-violet-500 text-violet-50 px-1">Custom html content</span></div>'},{id:4,headerHtml:'<div class="h-full flex justify-center items-center"><span class="bg-gradient-to-tr from-pink-500 to-violet-500 text-violet-50 px-1">This time in header</span></div>'}],ganttTableModules:[X]}}),{c(){t=h("div"),$(n.$$.fragment),this.h()},l(s){t=m(s,"DIV",{class:!0});var e=N(t);C(n.$$.fragment,e),e.forEach(r),this.h()},h(){b(t,"class","example border my-12 svelte-199ryr9")},m(s,e){i(s,t,e),T(n,t,null),p=!0},p:V,i(s){p||(H(n.$$.fragment,s),p=!0)},o(s){L(n.$$.fragment,s),p=!1},d(s){s&&r(t),j(n)}}}class pt extends A{constructor(t){super(),U(this,t,null,ot,q,{})}}function lt(d){let t,n='Row<a class="header-anchor" aria-hidden="true" href="#row">#</a>',p,s,e="Rows are defined as a list of objects. Rows can be rendered as a collapsible tree (rows are collapsed with SvelteGanttTable module). Row objects may have these parameters:",c,o,u='<thead><tr><th>Name</th> <th>Type</th> <th>Description</th> <th align="right">Default</th></tr></thead> <tbody><tr><td><code>id</code></td> <td><code>number | string</code></td> <td>Id of row, every row needs to have a unique one. <strong>(required)</strong></td> <td align="right"></td></tr> <tr><td><code>classes</code></td> <td><code>string | string[]</code></td> <td>Custom CSS classes to apply to row.</td> <td align="right"></td></tr> <tr><td><code>contentHtml</code></td> <td><code>string</code></td> <td>Html content of row, renders as background to a row.</td> <td align="right"></td></tr> <tr><td><code>enableDragging</code></td> <td><code>boolean</code></td> <td>enable dragging of tasks to and from this row.</td> <td align="right"><code>true</code></td></tr> <tr><td><code>draggable</code></td> <td><code>boolean</code></td> <td>enable dragging of tasks to and from this row. <em>(deprecated)</em></td> <td align="right"><code>true</code></td></tr> <tr><td><code>enableResize</code></td> <td><code>boolean</code></td> <td>enable resize of tasks on this row.</td> <td align="right"><code>true</code></td></tr> <tr><td><code>resizable</code></td> <td><code>boolean</code></td> <td>enable resize of tasks on this row. <em>(deprecated)</em></td> <td align="right"><code>true</code></td></tr> <tr><td><code>label</code></td> <td><code>string</code></td> <td>Label of row, could be any other property, can be displayed with SvelteGanttTable.</td> <td align="right"></td></tr> <tr><td><code>headerHtml</code></td> <td><code>string</code></td> <td>Html content of table row header, displayed in SvelteGanttTable.</td> <td align="right"></td></tr> <tr><td><code>children</code></td> <td><code>object[]</code></td> <td>List of children row objects, these can have their own children.</td> <td align="right"></td></tr> <tr><td><code>expanded</code></td> <td><code>boolean</code></td> <td>Used when tree view is enabled, controls the expanded state.</td> <td align="right"></td></tr> <tr><td><code>height</code></td> <td><code>number</code></td> <td>The height of the row.</td> <td align="right"><code>52</code></td></tr></tbody>',M,y,S,k,B='Collapsible rows<a class="header-anchor" aria-hidden="true" href="#collapsible-rows">#</a>',P,v,W="To use collapsible rows add row items to <code>row.children</code> property. To show a button for expanding rows, set <code>type: &#39;tree&#39;</code> to the table header.",R,w,E,Y=`<code class="language-js">gantt<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    tableHeaders<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span> <span class="token literal-property property">property</span><span class="token operator">:</span> <span class="token string">'label'</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'tree'</span> <span class="token punctuation">&#125;</span> <span class="token punctuation">]</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    rows<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Parent 1'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">expanded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Child 1'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
                <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Child 2'</span> <span class="token punctuation">&#125;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
        <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Parent 2'</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">expanded</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Child 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">211</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Grandchild 1'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
                <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Child 2'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
                <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Child 3'</span> <span class="token punctuation">&#125;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'No children'</span> 
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`,G,_,z;return y=new pt({}),_=new st({}),{c(){t=h("h1"),t.innerHTML=n,p=f(),s=h("p"),s.textContent=e,c=f(),o=h("table"),o.innerHTML=u,M=f(),$(y.$$.fragment),S=f(),k=h("h1"),k.innerHTML=B,P=f(),v=h("p"),v.innerHTML=W,R=f(),w=h("pre"),E=new Z(!1),G=f(),$(_.$$.fragment),this.h()},l(a){t=m(a,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),x(t)!=="svelte-m7yn88"&&(t.innerHTML=n),p=g(a),s=m(a,"P",{"data-svelte-h":!0}),x(s)!=="svelte-ah8mfk"&&(s.textContent=e),c=g(a),o=m(a,"TABLE",{"data-svelte-h":!0}),x(o)!=="svelte-6v2uat"&&(o.innerHTML=u),M=g(a),C(y.$$.fragment,a),S=g(a),k=m(a,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),x(k)!=="svelte-14pltb5"&&(k.innerHTML=B),P=g(a),v=m(a,"P",{"data-svelte-h":!0}),x(v)!=="svelte-skxylx"&&(v.innerHTML=W),R=g(a),w=m(a,"PRE",{class:!0});var l=N(w);E=tt(l,!1),l.forEach(r),G=g(a),C(_.$$.fragment,a),this.h()},h(){b(t,"id","row"),b(t,"tabindex","-1"),b(k,"id","collapsible-rows"),b(k,"tabindex","-1"),E.a=null,b(w,"class","language-js")},m(a,l){i(a,t,l),i(a,p,l),i(a,s,l),i(a,c,l),i(a,o,l),i(a,M,l),T(y,a,l),i(a,S,l),i(a,k,l),i(a,P,l),i(a,v,l),i(a,R,l),i(a,w,l),E.m(Y,w),i(a,G,l),T(_,a,l),z=!0},p:V,i(a){z||(H(y.$$.fragment,a),H(_.$$.fragment,a),z=!0)},o(a){L(y.$$.fragment,a),L(_.$$.fragment,a),z=!1},d(a){a&&(r(t),r(p),r(s),r(c),r(o),r(M),r(S),r(k),r(P),r(v),r(R),r(w),r(G)),j(y,a),j(_,a)}}}function rt(d){let t,n;const p=[d[0],O];let s={$$slots:{default:[lt]},$$scope:{ctx:d}};for(let e=0;e<p.length;e+=1)s=I(s,p[e]);return t=new et({props:s}),{c(){$(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,c){T(t,e,c),n=!0},p(e,[c]){const o=c&1?at(p,[c&1&&K(e[0]),c&0&&K(O)]):{};c&2&&(o.$$scope={dirty:c,ctx:e}),t.$set(o)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){L(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}const O={title:"Rows"};function ct(d,t,n){return d.$$set=p=>{n(0,t=I(I({},t),J(p)))},t=J(t),[t]}class mt extends A{constructor(t){super(),U(this,t,ct,rt,q,{})}}export{mt as component};
