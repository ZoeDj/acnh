(this.webpackJsonpacnh=this.webpackJsonpacnh||[]).push([[0],{17:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/img.35f6321d.png"},31:function(e,a,t){e.exports=t(58)},58:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),c=t(27),n=t.n(c),s=(t(17),t(9)),r=t(1),m=t(5),o=t(6),u=t(7),h=t(8),d=t(28),v=t.n(d),g=function(){return v.a.get("https://acnhapi.com/v1a/villagers/")},E=t(15),p=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={villager:"",image:"",name:"",song:""},e.randomVillager=function(){var a=[Math.floor(390*Math.random())];g(a).then((function(t){return e.setState({name:Object.values(t.data)[a].name["name-USen"],image:Object.values(t.data)[a].image_uri,birthday:Object.values(t.data)[a]["birthday-string"],species:Object.values(t.data)[a].species,gender:Object.values(t.data)[a].gender,personality:Object.values(t.data)[a].personality,catchPhrase:Object.values(t.data)[a]["catch-phrase"]})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.randomVillager()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Discover New Friends"),l.a.createElement("div",{className:"arrow",onClick:function(){e.randomVillager()}},l.a.createElement(E.a,null)," ",l.a.createElement(E.b,null)),l.a.createElement("img",{src:this.state.image,alt:"villager"}),l.a.createElement("h4",null,"Name: ",this.state.name),l.a.createElement("h4",null,"Gender: ",this.state.gender),l.a.createElement("h4",null,"Species: ",this.state.species),l.a.createElement("h4",null,"Birthday: ",this.state.birthday),l.a.createElement("h4",null,"Personality: ",this.state.personality),l.a.createElement("h4",null,'Catch Phrase: "',this.state.catchPhrase,'"'))}}]),t}(i.Component),S=t(29),b=t.n(S);var f=function(e){return l.a.createElement("img",{className:"hero",src:b.a,alt:"acnh"})},y=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={birthdayPerson:[]},e.celebrateBirthday=function(){g().then((function(a){return e.setState({birthdayPerson:Object.values(a.data).map((function(e){var a=new Date;return e.birthday===a.getDate()+"/"+(a.getMonth()+1)?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("h5",{style:{color:"#49a30e"}},"Today is ",e.name["name-USen"],"'s Birthday"),l.a.createElement("img",{src:e.image_uri,alt:"female villager"}),l.a.createElement("h2",{style:{color:"#fef498",background:"#f0756a",borderRadius:"7px",padding:"7px"}},"Happy Birthday ",e.name["name-USen"],"!")):""}))})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.celebrateBirthday()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,this.state.birthdayPerson))}}]),t}(i.Component);var N=function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(f,null))},k=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={searchFemale:"",searchMale:"",searchAlligator:"",searchAnteater:"",searchBear:"",searchBird:"",searchBull:"",searchCat:"",searchChicken:"",searchCow:"",searchCub:"",searchDeer:"",searchDog:"",searchDuck:"",searchEagle:"",searchElephant:"",searchFrog:"",searchGoat:"",searchGorilla:"",searchHamster:"",searchHippo:"",searchHorse:"",searchKangaroo:"",searchKoala:"",searchLion:"",searchMonkey:"",searchMouse:"",searchOctopus:"",searchOstrich:"",searchPenguin:"",searchPig:"",searchRabbit:"",searchRhino:"",searchSheep:"",searchSquirrel:"",searchTiger:"",searchWolf:"",active:!1,active1:!1,active2:!1,active3:!1,active4:!1,active5:!1,active6:!1,active7:!1,active8:!1,active9:!1,active10:!1,active11:!1,active12:!1,active13:!1,active14:!1,active15:!1,active16:!1,active17:!1,active18:!1,active19:!1,active20:!1,active21:!1,active22:!1,active23:!1,active24:!1,active25:!1,active26:!1,active27:!1,active28:!1,active29:!1,active30:!1,active31:!1,active32:!1,active33:!1,active34:!1,active35:!1,active36:!1,active37:!1},e.searchVillager=function(){g().then((function(a){return e.setState({searchFemale:Object.values(a.data).map((function(e){return"Female"===e.gender?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"female villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchMale:Object.values(a.data).map((function(e){return"Male"===e.gender?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"male villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchAlligator:Object.values(a.data).map((function(e){return"Alligator"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"alligator villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchAnteater:Object.values(a.data).map((function(e){return"Anteater"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"Anteater villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchBear:Object.values(a.data).map((function(e){return"Bear"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"bear villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchBird:Object.values(a.data).map((function(e){return"Bird"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"bird villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchBull:Object.values(a.data).map((function(e){return"Bull"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"bull villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchCat:Object.values(a.data).map((function(e){return"Cat"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"cat villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchChicken:Object.values(a.data).map((function(e){return"Chicken"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"chicken villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchCow:Object.values(a.data).map((function(e){return"Cow"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"cow villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchCub:Object.values(a.data).map((function(e){return"Cub"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"cub villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchDeer:Object.values(a.data).map((function(e){return"Deer"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"deer villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchDog:Object.values(a.data).map((function(e){return"Dog"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"dog villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchDuck:Object.values(a.data).map((function(e){return"Duck"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"duck villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchEagle:Object.values(a.data).map((function(e){return"Eagle"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"eagle villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchElephant:Object.values(a.data).map((function(e){return"Elephant"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"elephant villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchFrog:Object.values(a.data).map((function(e){return"Frog"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"frog villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchGoat:Object.values(a.data).map((function(e){return"Goat"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"goat villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchGorilla:Object.values(a.data).map((function(e){return"Gorilla"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"gorilla villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchHamster:Object.values(a.data).map((function(e){return"Hamster"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"hamster villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchHippo:Object.values(a.data).map((function(e){return"Hippo"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"hippo villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchHorse:Object.values(a.data).map((function(e){return"Horse"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"horse villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchKangaroo:Object.values(a.data).map((function(e){return"Kangaroo"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"kangaroo villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchKoala:Object.values(a.data).map((function(e){return"Koala"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"koala villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchLion:Object.values(a.data).map((function(e){return"Lion"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"lion villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchMonkey:Object.values(a.data).map((function(e){return"Monkey"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"monkey villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchMouse:Object.values(a.data).map((function(e){return"Mouse"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"mouse villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchOctopus:Object.values(a.data).map((function(e){return"Octopus"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"octopus villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchOstrich:Object.values(a.data).map((function(e){return"Ostrich"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"ostrich villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchPenguin:Object.values(a.data).map((function(e){return"Penguin"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"penguin villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchPig:Object.values(a.data).map((function(e){return"Pig"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"pig villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchRabbit:Object.values(a.data).map((function(e){return"Rabbit"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"rabbit villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchRhino:Object.values(a.data).map((function(e){return"Rhino"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"rhino villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchSheep:Object.values(a.data).map((function(e){return"Sheep"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"sheep villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchSquirrel:Object.values(a.data).map((function(e){return"Squirrel"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"squirrel villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchTiger:Object.values(a.data).map((function(e){return"Tiger"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"tiger villager"}),l.a.createElement("p",null,e.name["name-USen"])):""})),searchWolf:Object.values(a.data).map((function(e){return"Wolf"===e.species?l.a.createElement("div",{className:"displayCard",key:e.id},l.a.createElement("img",{src:e.image_uri,alt:"wolf villager"}),l.a.createElement("p",null,e.name["name-USen"])):""}))})})).catch((function(e){return console.log(e)}))},e.toggleFemaleSearch=function(){e.setState((function(e){return{isFemaleSearchVisible:!e.isFemaleSearchVisible}}))},e.toggleMaleSearch=function(){e.setState((function(e){return{isMaleSearchVisible:!e.isMaleSearchVisible}}))},e.toggleAlligatorSearch=function(){e.setState((function(e){return{isAlligatorSearchVisible:!e.isAlligatorSearchVisible}}))},e.toggleAnteaterSearch=function(){e.setState((function(e){return{isAnteaterSearchVisible:!e.isAnteaterSearchVisible}}))},e.toggleBearSearch=function(){e.setState((function(e){return{isBearSearchVisible:!e.isBearSearchVisible}}))},e.toggleBirdSearch=function(){e.setState((function(e){return{isBirdSearchVisible:!e.isBirdSearchVisible}}))},e.toggleBullSearch=function(){e.setState((function(e){return{isBullSearchVisible:!e.isBullSearchVisible}}))},e.toggleCatSearch=function(){e.setState((function(e){return{isCatSearchVisible:!e.isCatSearchVisible}}))},e.toggleChickenSearch=function(){e.setState((function(e){return{isChickenSearchVisible:!e.isChickenSearchVisible}}))},e.toggleCowSearch=function(){e.setState((function(e){return{isCowSearchVisible:!e.isCowSearchVisible}}))},e.toggleCubSearch=function(){e.setState((function(e){return{isCubSearchVisible:!e.isCubSearchVisible}}))},e.toggleDeerSearch=function(){e.setState((function(e){return{isDeerSearchVisible:!e.isDeerSearchVisible}}))},e.toggleDogSearch=function(){e.setState((function(e){return{isDogSearchVisible:!e.isDogSearchVisible}}))},e.toggleDuckSearch=function(){e.setState((function(e){return{isDuckSearchVisible:!e.isDuckSearchVisible}}))},e.toggleEagleSearch=function(){e.setState((function(e){return{isEagleSearchVisible:!e.isEagleSearchVisible}}))},e.toggleElephantSearch=function(){e.setState((function(e){return{isElephantSearchVisible:!e.isElephantSearchVisible}}))},e.toggleFrogSearch=function(){e.setState((function(e){return{isFrogSearchVisible:!e.isFrogSearchVisible}}))},e.toggleGoatSearch=function(){e.setState((function(e){return{isGoatSearchVisible:!e.isGoatSearchVisible}}))},e.toggleGorillaSearch=function(){e.setState((function(e){return{isGorillaSearchVisible:!e.isGorillaSearchVisible}}))},e.toggleHamsterSearch=function(){e.setState((function(e){return{isHamsterSearchVisible:!e.isHamsterSearchVisible}}))},e.toggleHippoSearch=function(){e.setState((function(e){return{isHippoSearchVisible:!e.isHippoSearchVisible}}))},e.toggleHorseSearch=function(){e.setState((function(e){return{isHorseSearchVisible:!e.isHorseSearchVisible}}))},e.toggleKangarooSearch=function(){e.setState((function(e){return{isKangarooSearchVisible:!e.isKangarooSearchVisible}}))},e.toggleKoalaSearch=function(){e.setState((function(e){return{isKoalaSearchVisible:!e.isKoalaSearchVisible}}))},e.toggleLionSearch=function(){e.setState((function(e){return{isLionSearchVisible:!e.isLionSearchVisible}}))},e.toggleMonkeySearch=function(){e.setState((function(e){return{isMonkeySearchVisible:!e.isMonkeySearchVisible}}))},e.toggleMouseSearch=function(){e.setState((function(e){return{isMouseSearchVisible:!e.isMouseSearchVisible}}))},e.toggleOctopusSearch=function(){e.setState((function(e){return{isOctopusSearchVisible:!e.isOctopusSearchVisible}}))},e.toggleOstrichSearch=function(){e.setState((function(e){return{isOstrichSearchVisible:!e.isOstrichSearchVisible}}))},e.togglePenguinSearch=function(){e.setState((function(e){return{isPenguinSearchVisible:!e.isPenguinSearchVisible}}))},e.togglePigSearch=function(){e.setState((function(e){return{isPigSearchVisible:!e.isPigSearchVisible}}))},e.toggleRabbitSearch=function(){e.setState((function(e){return{isRabbitSearchVisible:!e.isRabbitSearchVisible}}))},e.toggleRhinoSearch=function(){e.setState((function(e){return{isRhinoSearchVisible:!e.isRhinoSearchVisible}}))},e.toggleSheepSearch=function(){e.setState((function(e){return{isSheepSearchVisible:!e.isSheepSearchVisible}}))},e.toggleSquirrelSearch=function(){e.setState((function(e){return{isSquirrelSearchVisible:!e.isSquirrelSearchVisible}}))},e.toggleTigerSearch=function(){e.setState((function(e){return{isTigerSearchVisible:!e.isTigerSearchVisible}}))},e.toggleWolfSearch=function(){e.setState((function(e){return{isWolfSearchVisible:!e.isWolfSearchVisible}}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.searchVillager()}},{key:"render",value:function(){var e=this,a=this.state.isFemaleSearchVisible,t=this.state.isMaleSearchVisible,i=this.state.isAlligatorSearchVisible,c=this.state.isAnteaterSearchVisible,n=this.state.isBearSearchVisible,s=this.state.isBirdSearchVisible,r=this.state.isBullSearchVisible,m=this.state.isCatSearchVisible,o=this.state.isChickenSearchVisible,u=this.state.isCowSearchVisible,h=this.state.isCubSearchVisible,d=this.state.isDeerSearchVisible,v=this.state.isDogSearchVisible,g=this.state.isDuckSearchVisible,E=this.state.isEagleSearchVisible,p=this.state.isElephantSearchVisible,S=this.state.isFrogSearchVisible,b=this.state.isGoatSearchVisible,f=this.state.isGorillaSearchVisible,y=this.state.isHamsterSearchVisible,N=this.state.isHippoSearchVisible,k=this.state.isHorseSearchVisible,C=this.state.isKangarooSearchVisible,V=this.state.isKoalaSearchVisible,O=this.state.isLionSearchVisible,j=this.state.isMonkeySearchVisible,B=this.state.isMouseSearchVisible,D=this.state.isOctopusSearchVisible,M=this.state.isOstrichSearchVisible,U=this.state.isPenguinSearchVisible,_=this.state.isPigSearchVisible,H=this.state.isRabbitSearchVisible,w=this.state.isRhinoSearchVisible,P=this.state.isSheepSearchVisible,A=this.state.isSquirrelSearchVisible,F=this.state.isTigerSearchVisible,G=this.state.isWolfSearchVisible;return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:this.state.active?"active":"",onClick:function(){e.toggleFemaleSearch(),e.setState({active:!e.state.active})}},"Female"),l.a.createElement("button",{type:"button",className:this.state.active1?"active1":"",onClick:function(){e.toggleMaleSearch(),e.setState({active1:!e.state.active1})}},"Male"),l.a.createElement("button",{type:"button",className:this.state.active2?"active2 animal":"animal",onClick:function(){e.toggleAlligatorSearch(),e.setState({active2:!e.state.active2})}},"Alligator"),l.a.createElement("button",{type:"button",className:this.state.active3?"active3 animal":"animal",onClick:function(){e.toggleAnteaterSearch(),e.setState({active3:!e.state.active3})}},"Anteater"),l.a.createElement("button",{type:"button",className:this.state.active4?"active4 animal":"animal",onClick:function(){e.toggleBearSearch(),e.setState({active4:!e.state.active4})}},"Bear"),l.a.createElement("button",{type:"button",className:this.state.active5?"active5 animal":"animal",onClick:function(){e.toggleBirdSearch(),e.setState({active5:!e.state.active5})}},"Bird"),l.a.createElement("button",{type:"button",className:this.state.active6?"active6 animal":"animal",onClick:function(){e.toggleBullSearch(),e.setState({active6:!e.state.active6})}},"Bull"),l.a.createElement("button",{type:"button",className:this.state.active7?"active7 animal":"animal",onClick:function(){e.toggleCatSearch(),e.setState({active7:!e.state.active7})}},"Cat"),l.a.createElement("button",{type:"button",className:this.state.active8?"active8 animal":"animal",onClick:function(){e.toggleChickenSearch(),e.setState({active8:!e.state.active8})}},"Chicken"),l.a.createElement("button",{type:"button",className:this.state.active9?"active9 animal":"animal",onClick:function(){e.toggleCowSearch(),e.setState({active9:!e.state.active9})}},"Cow"),l.a.createElement("button",{type:"button",className:this.state.active10?"active10 animal":"animal",onClick:function(){e.toggleCubSearch(),e.setState({active10:!e.state.active10})}},"Cub"),l.a.createElement("button",{type:"button",className:this.state.active11?"active11 animal":"animal",onClick:function(){e.toggleDeerSearch(),e.setState({active11:!e.state.active11})}},"Deer"),l.a.createElement("button",{type:"button",className:this.state.active12?"active12 animal":"animal",onClick:function(){e.toggleDogSearch(),e.setState({active12:!e.state.active12})}},"Dog"),l.a.createElement("button",{type:"button",className:this.state.active13?"active13 animal":"animal",onClick:function(){e.toggleDuckSearch(),e.setState({active13:!e.state.active13})}},"Duck"),l.a.createElement("button",{type:"button",className:this.state.active14?"active14 animal":"animal",onClick:function(){e.toggleEagleSearch(),e.setState({active14:!e.state.active14})}},"Eagle"),l.a.createElement("button",{type:"button",className:this.state.active15?"active15 animal":"animal",onClick:function(){e.toggleElephantSearch(),e.setState({active15:!e.state.active15})}},"Elephant"),l.a.createElement("button",{type:"button",className:this.state.active16?"active16 animal":"animal",onClick:function(){e.toggleFrogSearch(),e.setState({active16:!e.state.active16})}},"Frog"),l.a.createElement("button",{type:"button",className:this.state.active17?"active17 animal":"animal",onClick:function(){e.toggleGoatSearch(),e.setState({active17:!e.state.active17})}},"Goat"),l.a.createElement("button",{type:"button",className:this.state.active18?"active18 animal":"animal",onClick:function(){e.toggleGorillaSearch(),e.setState({active18:!e.state.active18})}},"Gorilla"),l.a.createElement("button",{type:"button",className:this.state.active19?"active19 animal":"animal",onClick:function(){e.toggleHamsterSearch(),e.setState({active19:!e.state.active19})}},"Hamster"),l.a.createElement("button",{type:"button",className:this.state.active20?"active20 animal":"animal",onClick:function(){e.toggleHippoSearch(),e.setState({active20:!e.state.active20})}},"Hippo"),l.a.createElement("button",{type:"button",className:this.state.active21?"active21 animal":"animal",onClick:function(){e.toggleHorseSearch(),e.setState({active21:!e.state.active21})}},"Horse"),l.a.createElement("button",{type:"button",className:this.state.active22?"active22 animal":"animal",onClick:function(){e.toggleKangarooSearch(),e.setState({active22:!e.state.active22})}},"Kangaroo"),l.a.createElement("button",{type:"button",className:this.state.active23?"active23 animal":"animal",onClick:function(){e.toggleKoalaSearch(),e.setState({active23:!e.state.active23})}},"Koala"),l.a.createElement("button",{type:"button",className:this.state.active24?"active24 animal":"animal",onClick:function(){e.toggleLionSearch(),e.setState({active24:!e.state.active24})}},"Lion"),l.a.createElement("button",{type:"button",className:this.state.active25?"active25 animal":"animal",onClick:function(){e.toggleMonkeySearch(),e.setState({active25:!e.state.active25})}},"Monkey"),l.a.createElement("button",{type:"button",className:this.state.active26?"active26 animal":"animal",onClick:function(){e.toggleMouseSearch(),e.setState({active26:!e.state.active26})}},"Mouse"),l.a.createElement("button",{type:"button",className:this.state.active27?"active27 animal":"animal",onClick:function(){e.toggleOctopusSearch(),e.setState({active27:!e.state.active27})}},"Octopus"),l.a.createElement("button",{type:"button",className:this.state.active28?"active28 animal":"animal",onClick:function(){e.toggleOstrichSearch(),e.setState({active28:!e.state.active28})}},"Ostrich"),l.a.createElement("button",{type:"button",className:this.state.active29?"active29 animal":"animal",onClick:function(){e.togglePenguinSearch(),e.setState({active29:!e.state.active29})}},"Penguin"),l.a.createElement("button",{type:"button",className:this.state.active30?"active30 animal":"animal",onClick:function(){e.togglePigSearch(),e.setState({active30:!e.state.active30})}},"Pig"),l.a.createElement("button",{type:"button",className:this.state.active31?"active31 animal":"animal",onClick:function(){e.toggleRabbitSearch(),e.setState({active31:!e.state.active31})}},"Rabbit"),l.a.createElement("button",{type:"button",className:this.state.active32?"active32 animal":"animal",onClick:function(){e.toggleRhinoSearch(),e.setState({active32:!e.state.active32})}},"Rhino"),l.a.createElement("button",{type:"button",className:this.state.active33?"active33 animal":"animal",onClick:function(){e.toggleSheepSearch(),e.setState({active33:!e.state.active33})}},"Sheep"),l.a.createElement("button",{type:"button",className:this.state.active34?"active34 animal":"animal",onClick:function(){e.toggleSquirrelSearch(),e.setState({active34:!e.state.active34})}},"Squirrel"),l.a.createElement("button",{type:"button",className:this.state.active35?"active35 animal":"animal",onClick:function(){e.toggleTigerSearch(),e.setState({active35:!e.state.active35})}},"Tiger"),l.a.createElement("button",{type:"button",className:this.state.active36?"active36 animal":"animal",onClick:function(){e.toggleWolfSearch(),e.setState({active36:!e.state.active36})}},"Wolf"),l.a.createElement("div",{className:"".concat(a?"":"hidden")},l.a.createElement("div",{className:"display female"},l.a.createElement("h2",null,"Female"),l.a.createElement("div",null,this.state.searchFemale))),l.a.createElement("div",{className:" ".concat(t?"":"hidden")},l.a.createElement("div",{className:"display male"},l.a.createElement("h2",null,"Male"),l.a.createElement("div",null,this.state.searchMale))),l.a.createElement("div",{className:"".concat(i?"":"hidden")},l.a.createElement("div",{className:"display alligator"},l.a.createElement("h2",null,"Alligator"),l.a.createElement("div",null,this.state.searchAlligator))),l.a.createElement("div",{className:"".concat(c?"":"hidden")},l.a.createElement("div",{className:"display anteater"},l.a.createElement("h2",null,"Anteater"),l.a.createElement("div",null,this.state.searchAnteater))),l.a.createElement("div",{className:"".concat(n?"":"hidden")},l.a.createElement("div",{className:"display bear"},l.a.createElement("h2",null,"Bear"),l.a.createElement("div",null,this.state.searchBear))),l.a.createElement("div",{className:"".concat(s?"":"hidden")},l.a.createElement("div",{className:"display bird"},l.a.createElement("h2",null,"Bird"),l.a.createElement("div",null,this.state.searchBird))),l.a.createElement("div",{className:"".concat(r?"":"hidden")},l.a.createElement("div",{className:"display bull"},l.a.createElement("h2",null,"Bull"),l.a.createElement("div",null,this.state.searchBull))),l.a.createElement("div",{className:"".concat(m?"":"hidden")},l.a.createElement("div",{className:"display cat"},l.a.createElement("h2",null,"Cat"),l.a.createElement("div",null,this.state.searchCat))),l.a.createElement("div",{className:"".concat(o?"":"hidden")},l.a.createElement("div",{className:"display chicken"},l.a.createElement("h2",null,"Chicken"),l.a.createElement("div",null,this.state.searchChicken))),l.a.createElement("div",{className:"".concat(u?"":"hidden")},l.a.createElement("div",{className:"display cow"},l.a.createElement("h2",null,"Cow"),l.a.createElement("div",null,this.state.searchCow))),l.a.createElement("div",{className:"".concat(h?"":"hidden")},l.a.createElement("div",{className:"display cub"},l.a.createElement("h2",null,"Cub"),l.a.createElement("div",null,this.state.searchCub))),l.a.createElement("div",{className:"".concat(d?"":"hidden")},l.a.createElement("div",{className:"display deer"},l.a.createElement("h2",null,"Deer"),l.a.createElement("div",null,this.state.searchDeer))),l.a.createElement("div",{className:"".concat(v?"":"hidden")},l.a.createElement("div",{className:"display dog"},l.a.createElement("h2",null,"Dog"),l.a.createElement("div",null,this.state.searchDog))),l.a.createElement("div",{className:"".concat(g?"":"hidden")},l.a.createElement("div",{className:"display duck"},l.a.createElement("h2",null,"Duck"),l.a.createElement("div",null,this.state.searchDuck))),l.a.createElement("div",{className:"".concat(E?"":"hidden")},l.a.createElement("div",{className:"display eagle"},l.a.createElement("h2",null,"Eagle"),l.a.createElement("div",null,this.state.searchEagle))),l.a.createElement("div",{className:"".concat(p?"":"hidden")},l.a.createElement("div",{className:"display elephant"},l.a.createElement("h2",null,"Elephant"),l.a.createElement("div",null,this.state.searchElephant))),l.a.createElement("div",{className:"".concat(S?"":"hidden")},l.a.createElement("div",{className:"display frog"},l.a.createElement("h2",null,"Frog"),l.a.createElement("div",null,this.state.searchFrog))),l.a.createElement("div",{className:"".concat(b?"":"hidden")},l.a.createElement("div",{className:"display goat"},l.a.createElement("h2",null,"Goat"),l.a.createElement("div",null,this.state.searchGoat))),l.a.createElement("div",{className:"".concat(f?"":"hidden")},l.a.createElement("div",{className:"display gorilla"},l.a.createElement("h2",null,"Gorilla"),l.a.createElement("div",null,this.state.searchGorilla))),l.a.createElement("div",{className:"".concat(y?"":"hidden")},l.a.createElement("div",{className:"display hamster"},l.a.createElement("h2",null,"Hamster"),l.a.createElement("div",null,this.state.searchHamster))),l.a.createElement("div",{className:"".concat(N?"":"hidden")},l.a.createElement("div",{className:"display hippo"},l.a.createElement("h2",null,"Hippo"),l.a.createElement("div",null,this.state.searchHippo))),l.a.createElement("div",{className:"".concat(k?"":"hidden")},l.a.createElement("div",{className:"display horse"},l.a.createElement("h2",null,"Horse"),l.a.createElement("div",null,this.state.searchHorse))),l.a.createElement("div",{className:"".concat(C?"":"hidden")},l.a.createElement("div",{className:"display kangaroo"},l.a.createElement("h2",null,"Kangaroo"),l.a.createElement("div",null,this.state.searchKangaroo))),l.a.createElement("div",{className:"".concat(V?"":"hidden")},l.a.createElement("div",{className:"display koala"},l.a.createElement("h2",null,"Koala"),l.a.createElement("div",null,this.state.searchKoala))),l.a.createElement("div",{className:"".concat(O?"":"hidden")},l.a.createElement("div",{className:"display lion"},l.a.createElement("h2",null,"Lion"),l.a.createElement("div",null,this.state.searchLion))),l.a.createElement("div",{className:"".concat(j?"":"hidden")},l.a.createElement("div",{className:"display gorilla"},l.a.createElement("h2",null,"Monkey"),l.a.createElement("div",null,this.state.searchMonkey))),l.a.createElement("div",{className:"".concat(B?"":"hidden")},l.a.createElement("div",{className:"display mouse"},l.a.createElement("h2",null,"Mouse"),l.a.createElement("div",null,this.state.searchMouse))),l.a.createElement("div",{className:"".concat(D?"":"hidden")},l.a.createElement("div",{className:"display octopus"},l.a.createElement("h2",null,"Octopus"),l.a.createElement("div",null,this.state.searchOctopus))),l.a.createElement("div",{className:"".concat(M?"":"hidden")},l.a.createElement("div",{className:"display ostrich"},l.a.createElement("h2",null,"Ostrich"),l.a.createElement("div",null,this.state.searchOstrich))),l.a.createElement("div",{className:"".concat(U?"":"hidden")},l.a.createElement("div",{className:"display penguin"},l.a.createElement("h2",null,"Penguin"),l.a.createElement("div",null,this.state.searchPenguin))),l.a.createElement("div",{className:"".concat(_?"":"hidden")},l.a.createElement("div",{className:"display pig"},l.a.createElement("h2",null,"Pig"),l.a.createElement("div",null,this.state.searchPig))),l.a.createElement("div",{className:"".concat(H?"":"hidden")},l.a.createElement("div",{className:"display rabbit"},l.a.createElement("h2",null,"Rabbit"),l.a.createElement("div",null,this.state.searchRabbit))),l.a.createElement("div",{className:"".concat(w?"":"hidden")},l.a.createElement("div",{className:"display rhino"},l.a.createElement("h2",null,"Rhino"),l.a.createElement("div",null,this.state.searchRhino))),l.a.createElement("div",{className:"".concat(P?"":"hidden")},l.a.createElement("div",{className:"display sheep"},l.a.createElement("h2",null,"Sheep"),l.a.createElement("div",null,this.state.searchSheep))),l.a.createElement("div",{className:"".concat(A?"":"hidden")},l.a.createElement("div",{className:"display squirrel"},l.a.createElement("h2",null,"Squirrel"),l.a.createElement("div",null,this.state.searchSquirrel))),l.a.createElement("div",{className:"".concat(F?"":"hidden")},l.a.createElement("div",{className:"display tiger"},l.a.createElement("h2",null,"Tiger"),l.a.createElement("div",null,this.state.searchTiger))),l.a.createElement("div",{className:"".concat(G?"":"hidden")},l.a.createElement("div",{className:"display wolf"},l.a.createElement("h2",null,"Wolf"),l.a.createElement("div",null,this.state.searchWolf))))}}]),t}(i.Component);function C(e){return l.a.createElement("div",{className:"nav"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Animal Crossing")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/discover"},"Discover")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/search"},"Search")))))}var V=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h4",null,"AnimalCrossingFun@2020"))},O=function(){return l.a.createElement(s.a,null,l.a.createElement(C,null),l.a.createElement(r.a,{exact:!0,path:"/",component:N}),l.a.createElement(r.a,{exact:!0,path:"/discover",component:p}),l.a.createElement(r.a,{exact:!0,path:"/search",component:k}),l.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.af0daa89.chunk.js.map