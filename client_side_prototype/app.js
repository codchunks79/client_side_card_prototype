
  Vue.component('card-component',{
  template: `
<div class="cardPrimary">
<div class="cardHeader">
<slot name="card-header"></slot>
</div>
<div class="cardContent">
<slot name="content"></slot>
</div>
<div class="cardFooter">
<slot name="card-footer"></slot>
</div>
</div>
`
})

Vue.component('primary-contained-button',{
  template: `
     <button class="primaryButtonContained">
      <slot></slot>
      </button>
`
})

new Vue({
  el: '#app',
  data:{
    title: "Life Time Legal"
  }

});
