

//now we need an input component

var QQInput =  Vue.extend({
  template: '#QQInput-template',
  data: function(){
    return {
      newInput: '',
      inputs: [
        { text: 'Add some input' }
      ]
    }
  } ,
  methods: {
    addInput: function () {
      var text = this.newInput.trim()
      if (text) {
        this.inputs.push({ text: text })
        this.newInput = ''
      }
    },
    removeInput: function (index) {
      this.inputs.splice(index, 1)
    }
  }
});
Vue.component('qqinput', QQInput);
//need a couple of instances of this
new Vue({
  el: "#strengths"
});
new Vue({
  el: "#weaknesses"
});
new Vue({
  el: "#opportunities"
});
new Vue({
  el: "#threats"
});
