(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[516],{6516:function(e,t,i){"use strict";i.r(t),i.d(t,{RecipesModule:function(){return x}});var n=i(665),r=i(4466),o=i(266),c=i(5257),s=i(8002),p=i(639),d=i(9849);let a=(()=>{class e{constructor(e,t){this.authS=e,this.router=t}canActivate(e,t){return this.authS.user.pipe((0,c.q)(1),(0,s.U)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(p.LFG(d.e),p.LFG(o.F0))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=i(9994),g=i(8583);function l(e,t){if(1&e&&(p.TgZ(0,"li",9),p._uU(1),p.qZA()),2&e){const e=t.$implicit;p.xp6(1),p.AsE(" ",e.name," - ",e.amount," ")}}let Z=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.recipe=this.recipeService.getRecipeById(+e.id),this.id=+e.id})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEdit(){this.router.navigate(["edit"],{relativeTo:this.route})}onDelete(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.j),p.Y36(o.gz),p.Y36(o.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipe-detail"]],decls:29,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"dropdown","my-2"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p._UZ(2,"img",2),p.qZA(),p.qZA(),p.TgZ(3,"div",0),p.TgZ(4,"div",1),p.TgZ(5,"h1"),p._uU(6),p.qZA(),p.qZA(),p.qZA(),p.TgZ(7,"div",0),p.TgZ(8,"div",1),p._uU(9),p.qZA(),p.qZA(),p.TgZ(10,"div",3),p.TgZ(11,"button",4),p._uU(12," Manage Recipe "),p.qZA(),p.TgZ(13,"ul",5),p.TgZ(14,"li"),p.TgZ(15,"a",6),p.NdJ("click",function(){return t.onAddToShoppingList()}),p._uU(16,"To Shopping List"),p.qZA(),p.qZA(),p.TgZ(17,"li"),p.TgZ(18,"a",6),p.NdJ("click",function(){return t.onEdit()}),p._uU(19,"Edit Recipe"),p.qZA(),p.qZA(),p.TgZ(20,"li"),p.TgZ(21,"a",6),p.NdJ("click",function(){return t.onDelete()}),p._uU(22,"Delete Recipe"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(23,"span"),p._uU(24,"Ingredients"),p.qZA(),p.TgZ(25,"div",0),p.TgZ(26,"div",1),p.TgZ(27,"ul",7),p.YNc(28,l,2,2,"li",8),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.xp6(2),p.s9C("alt",t.recipe.name),p.Q6J("src",t.recipe.imagePath,p.LSH),p.xp6(4),p.Oqu(t.recipe.name),p.xp6(3),p.hij(" ",t.recipe.description," "),p.xp6(19),p.Q6J("ngForOf",t.recipe.ingredients))},directives:[g.sg],styles:[""]}),e})();function m(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"div",22),p.TgZ(1,"div",23),p._UZ(2,"input",24),p.qZA(),p.TgZ(3,"div",25),p._UZ(4,"input",26),p.qZA(),p.TgZ(5,"div",27),p.TgZ(6,"button",28),p.NdJ("click",function(){const t=p.CHM(e).index;return p.oxw().onDeleteIng(t)}),p._uU(7,"X"),p.qZA(),p.qZA(),p.qZA()}2&e&&p.Q6J("formGroupName",t.index)}let h=(()=>{class e{constructor(e,t,i){this.route=e,this.rServ=t,this.router=i,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}initForm(){let e="",t="",i="",r=new n.Oe([]);if(this.editMode){const o=this.rServ.getRecipeById(this.id);if(e=o.name,t=o.imagePath,i=o.description,o.ingredients)for(let e of o.ingredients)r.push(new n.cw({name:new n.NI(e.name,n.kI.required),amount:new n.NI(e.amount,[n.kI.required,n.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.form=new n.cw({name:new n.NI(e,n.kI.required),imagePath:new n.NI(t,n.kI.required),description:new n.NI(i,n.kI.required),ingredients:r})}onSubmit(){this.editMode?this.rServ.updateRecipe(this.id,this.form.value):this.rServ.addRecipe(this.form.value),this.onCancel()}getControls(){return this.form.get("ingredients").controls}addIngredient(){this.form.get("ingredients").push(new n.cw({name:new n.NI(null,n.kI.required),amount:new n.NI(null,[n.kI.required,n.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIng(e){this.form.get("ingredients").removeAt(e)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(o.gz),p.Y36(u.j),p.Y36(o.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipe-edit"]],decls:42,vars:5,consts:[[1,"row"],[1,"col-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success","mx-1",3,"disabled"],["type","button",1,"btn","btn-danger","mx-1",3,"click"],[1,"grid"],[1,"form-group"],["for","name"],["type","text","name","name","id","name","formControlName","name",1,"form-control"],["for","imgPath"],["type","text","name","imgPath","id","imgPath","formControlName","imagePath",1,"form-control"],["imagePath",""],["alt","",1,"img-fluid",3,"src"],["for","description"],["name","description","id","description","formControlName","description","rows","6",1,"form-control"],[1,"row","my-2"],[1,"row","align-items-center"],[1,"col-6"],["type","button",1,"btn","btn-sm","btn-outline-primary","float-end",3,"click"],[1,"row","mt-1"],["formArrayName","ingredients",1,"col-12"],["class","row mb-2",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mb-2",3,"formGroupName"],[1,"col-7"],["type","text","formControlName","name",1,"form-control"],[1,"col-3"],["type","number","formControlName","amount",1,"form-control"],[1,"col-2"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"form",2),p.NdJ("ngSubmit",function(){return t.onSubmit()}),p.TgZ(3,"div",0),p.TgZ(4,"div",1),p.TgZ(5,"button",3),p._uU(6),p.qZA(),p.TgZ(7,"button",4),p.NdJ("click",function(){return t.onCancel()}),p._uU(8,"Cancel"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(9,"div",5),p.TgZ(10,"div",1),p.TgZ(11,"div",6),p.TgZ(12,"label",7),p._uU(13,"Name"),p.qZA(),p._UZ(14,"input",8),p.qZA(),p.qZA(),p.qZA(),p.TgZ(15,"div",0),p.TgZ(16,"div",1),p.TgZ(17,"div",6),p.TgZ(18,"label",9),p._uU(19,"Image Url"),p.qZA(),p._UZ(20,"input",10,11),p.qZA(),p.qZA(),p.qZA(),p.TgZ(22,"div",0),p._UZ(23,"img",12),p.qZA(),p.TgZ(24,"div",0),p.TgZ(25,"div",1),p.TgZ(26,"div",6),p.TgZ(27,"label",13),p._uU(28,"Description"),p.qZA(),p._UZ(29,"textarea",14),p.qZA(),p.qZA(),p.qZA(),p.TgZ(30,"div",15),p.TgZ(31,"div",1),p.TgZ(32,"div",16),p.TgZ(33,"div",17),p.TgZ(34,"label"),p._uU(35,"Ingredients"),p.qZA(),p.qZA(),p.TgZ(36,"div",17),p.TgZ(37,"button",18),p.NdJ("click",function(){return t.addIngredient()}),p._uU(38," Add ingredient "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(39,"div",19),p.TgZ(40,"div",20),p.YNc(41,m,8,1,"div",21),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){const e=p.MAs(21);p.xp6(2),p.Q6J("formGroup",t.form),p.xp6(3),p.Q6J("disabled",t.form.invalid),p.xp6(1),p.hij(" ",t.editMode?"Update":"Save"," "),p.xp6(17),p.Q6J("src",e.value,p.LSH),p.xp6(18),p.Q6J("ngForOf",t.getControls())}},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.CE,g.sg,n.x0,n.wV],styles:["label[_ngcontent-%COMP%]{margin-top:10px;font-weight:700}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(p.TgZ(0,"h3"),p._uU(1,"Please select a recipe!"),p.qZA())},styles:[""]}),e})();const v=function(e){return[e]};let q=(()=>{class e{constructor(e){this.rec=e}ngOnInit(){this.recipe=this.rec.getRecipeById(this.index)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.j))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix","my-1",2,"cursor","pointer",3,"routerLink"],[1,"float","start"],[1,"float-end"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(p.TgZ(0,"a",0),p.TgZ(1,"div",1),p.TgZ(2,"h4"),p._uU(3),p.qZA(),p.TgZ(4,"p"),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"span",2),p._UZ(7,"img",3),p.qZA(),p.qZA()),2&e&&(p.Q6J("routerLink",p.VKq(5,v,t.index)),p.xp6(3),p.Oqu(t.recipe.name),p.xp6(2),p.Oqu(t.recipe.description),p.xp6(2),p.s9C("alt",t.recipe.name),p.Q6J("src",t.recipe.imagePath,p.LSH))},directives:[o.yS,o.Od],styles:[""]}),e})();function A(e,t){if(1&e&&p._UZ(0,"app-recipe-item",4),2&e){const e=t.index;p.Q6J("recipe",t.$implicit)("index",e)}}let T=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.router=t,this.route=i}ngOnInit(){this.recipes=this.recipeService.getRecipes(),this.sub=this.recipeService.recipesChanges.subscribe(e=>{this.recipes=e})}onNew(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.j),p.Y36(o.F0),p.Y36(o.gz))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"button",2),p.NdJ("click",function(){return t.onNew()}),p._uU(3,"New Recipe"),p.qZA(),p.qZA(),p.qZA(),p._UZ(4,"hr"),p.TgZ(5,"div",0),p.TgZ(6,"div",1),p.YNc(7,A,1,2,"app-recipe-item",3),p.qZA(),p.qZA()),2&e&&(p.xp6(7),p.Q6J("ngForOf",t.recipes))},directives:[g.sg,q],styles:[""]}),e})();const b=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p._UZ(2,"app-recipe-list"),p.qZA(),p.TgZ(3,"div",2),p._UZ(4,"router-outlet"),p.qZA(),p.qZA())},directives:[T,o.lC],styles:[""]}),e})(),canActivate:[a],children:[{path:"",component:f},{path:"new",component:h},{path:":id",component:Z},{path:":id/edit",component:h}]}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[o.Bz.forChild(b)],o.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[r.m,w,n.UX]]}),e})()}}]);